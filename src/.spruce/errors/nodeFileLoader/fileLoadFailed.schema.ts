import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const fileLoadFailedSchema: SpruceErrors.NodeFileLoader.FileLoadFailedSchema  = {
	id: 'fileLoadFailed',
	namespace: 'NodeFileLoader',
	name: 'FILE_LOAD_FAILED',
	    fields: {
	            /** Path to the file that failed to load.. */
	            'path': {
	                label: 'Path to the file that failed to load.',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(fileLoadFailedSchema)

export default fileLoadFailedSchema
