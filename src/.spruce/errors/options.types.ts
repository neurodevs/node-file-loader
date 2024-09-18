import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface InvalidFileExtensionErrorOptions extends SpruceErrors.NodeFileLoader.InvalidFileExtension, ISpruceErrorOptions {
	code: 'INVALID_FILE_EXTENSION'
}
export interface FileNotFoundErrorOptions extends SpruceErrors.NodeFileLoader.FileNotFound, ISpruceErrorOptions {
	code: 'FILE_NOT_FOUND'
}
export interface FileLoadFailedErrorOptions extends SpruceErrors.NodeFileLoader.FileLoadFailed, ISpruceErrorOptions {
	code: 'FILE_LOAD_FAILED'
}

type ErrorOptions =  | InvalidFileExtensionErrorOptions  | FileNotFoundErrorOptions  | FileLoadFailedErrorOptions 

export default ErrorOptions
