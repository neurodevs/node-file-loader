import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const fileNotFoundSchema: SpruceErrors.NodeFileLoader.FileNotFoundSchema  = {
	id: 'fileNotFound',
	namespace: 'NodeFileLoader',
	name: 'FILE_NOT_FOUND',
	    fields: {
	            /** Path to the file that was not found.. */
	            'path': {
	                label: 'Path to the file that was not found.',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(fileNotFoundSchema)

export default fileNotFoundSchema
