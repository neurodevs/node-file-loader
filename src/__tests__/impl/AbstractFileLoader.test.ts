import AbstractSpruceTest, {
    test,
    assert,
    errorAssert,
    generateId,
} from '@sprucelabs/test-utils'
import { FileLoaderOptions } from '../../impl/AbstractFileLoader'
import MockFileLoader from '../../testDoubles/MockFileLoader'

export default class AbstractFileLoaderTest extends AbstractSpruceTest {
    private static invalidExtensionPath: string
    private static doesNotExistPath: string
    private static actualPath: string

    private static loader: MockFileLoader

    protected static async beforeEach() {
        await super.beforeEach()

        this.invalidExtensionPath = generateId()
        this.doesNotExistPath = `${generateId()}.mock`
        this.actualPath = 'src/__tests__/testData/test.mock'

        this.loader = this.Loader()
        this.loader.disableThrowOnLoad()
        this.loader.enableValidatePath()
    }

    @test()
    protected static async canCreateFileLoader() {
        assert.isTruthy(this.loader)
    }

    @test()
    protected static async throwsWithMissingRequiredOptions() {
        const err = await assert.doesThrowAsync(
            // @ts-ignore
            async () => await this.load()
        )

        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['path'],
        })
    }

    @test()
    protected static async throwsIfPathDoesNotExist() {
        const err = await assert.doesThrowAsync(
            async () => await this.load(this.doesNotExistPath)
        )

        errorAssert.assertError(err, 'FILE_NOT_FOUND', {
            path: this.doesNotExistPath,
        })
    }

    @test()
    protected static async throwsWithInvalidFileExtension() {
        const err = await assert.doesThrowAsync(
            async () => await this.load(this.invalidExtensionPath)
        )

        errorAssert.assertError(err, 'INVALID_FILE_EXTENSION', {
            expected: '.mock',
            path: this.invalidExtensionPath,
        })
    }

    @test()
    protected static async throwsIfLoadFails() {
        const fakeError = 'Fake error'
        this.loader.setFakeError(fakeError)
        this.loader.enableThrowOnLoad()
        this.loader.disableValidatePath()

        const err = await assert.doesThrowAsync(
            async () => await this.load(this.actualPath)
        )

        errorAssert.assertError(err, 'FILE_LOAD_FAILED', {
            path: this.actualPath,
            originalError: fakeError,
        })
    }

    @test()
    protected static async canTurnOffValidation() {
        const loader = this.Loader({ shouldValidatePath: false })

        await loader.load(this.actualPath)
        assert.isEqual(loader.numCallsToValidatePath, 0)
    }

    private static async load(path: string) {
        return await this.loader.load(path)
    }

    private static Loader(options?: FileLoaderOptions) {
        return new MockFileLoader(options) as MockFileLoader
    }
}
