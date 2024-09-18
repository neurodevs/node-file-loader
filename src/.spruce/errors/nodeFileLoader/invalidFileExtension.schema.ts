import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const invalidFileExtensionSchema: SpruceErrors.NodeFileLoader.InvalidFileExtensionSchema  = {
	id: 'invalidFileExtension',
	namespace: 'NodeFileLoader',
	name: 'INVALID_FILE_EXTENSION',
	    fields: {
	            /** The expected file extension.. */
	            'expected': {
	                label: 'The expected file extension.',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Path to the file with an invalid file extension.. */
	            'path': {
	                label: 'Path to the file with an invalid file extension.',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(invalidFileExtensionSchema)

export default invalidFileExtensionSchema
