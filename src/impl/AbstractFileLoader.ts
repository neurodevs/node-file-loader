import * as fs from 'fs'
import { assertOptions } from '@sprucelabs/schema'
import SpruceError from '../errors/SpruceError'

export default abstract class AbstractFileLoader<FileContent>
    implements FileLoader<FileContent>
{
    protected abstract fileExtension: string
    protected path!: string
    protected shouldValidatePath: boolean

    protected constructor(options?: FileLoaderOptions) {
        const { shouldValidatePath = true } = options ?? {}
        this.shouldValidatePath = shouldValidatePath
    }

    public async load(path: string) {
        this.path = path

        if (this.shouldValidatePath) {
            this.validatePath()
        }

        return await this.tryToLoadFile()
    }

    protected validatePath() {
        this.assertPathWasPassed()
        this.assertPathHasValidExtension()
        this.assertPathExists()
    }

    private assertPathWasPassed() {
        assertOptions({ path: this.path }, ['path'])
    }

    private assertPathHasValidExtension() {
        if (!this.path.endsWith(this.fileExtension)) {
            throw new SpruceError({
                code: 'INVALID_FILE_EXTENSION',
                expected: this.fileExtension,
                path: this.path,
            })
        }
    }

    private assertPathExists() {
        if (!fs.existsSync(this.path)) {
            throw new SpruceError({
                code: 'FILE_NOT_FOUND',
                path: this.path,
            })
        }
    }

    private async tryToLoadFile() {
        try {
            return await this.loadFile()
        } catch (err: any) {
            throw new SpruceError({
                code: 'FILE_LOAD_FAILED',
                path: this.path,
                originalError: err.message,
            })
        }
    }

    protected abstract loadFile(): Promise<FileContent>
}

export interface FileLoader<FileContent> {
    load(path: string): Promise<FileContent>
}

export interface FileLoaderOptions {
    shouldValidatePath?: boolean
}

export type FileLoaderConstructor = new (
    options?: FileLoaderOptions
) => FileLoader<any>
