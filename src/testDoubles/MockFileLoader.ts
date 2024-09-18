import AbstractFileLoader, { FileLoaderOptions } from '../AbstractFileLoader'

export default class MockFileLoader extends AbstractFileLoader<string[]> {
    public numCallsToValidatePath = 0

    protected fileExtension = '.mock'
    private shouldThrowOnLoadFile = false
    private _fakeError = 'Unhandled error'
    private _mockContent = ['mockContent1', 'mockContent2']

    public constructor(options?: FileLoaderOptions) {
        super(options)
    }

    public setMockContent(content: string[]) {
        this._mockContent = content
    }

    public setFakeError(err: string) {
        this._fakeError = err
    }

    public enableThrowOnLoad() {
        this.shouldThrowOnLoadFile = true
    }

    public disableThrowOnLoad() {
        this.shouldThrowOnLoadFile = false
    }

    public enableValidatePath() {
        this.shouldValidatePath = true
    }

    public disableValidatePath() {
        this.shouldValidatePath = false
    }

    protected validatePath() {
        this.numCallsToValidatePath++
        super.validatePath()
    }

    protected async loadFile() {
        if (this.shouldThrowOnLoadFile) {
            throw new Error(this.fakeError)
        }
        return this.mockContent
    }

    private get mockContent() {
        return this._mockContent
    }

    private get fakeError() {
        return this._fakeError
    }
}
