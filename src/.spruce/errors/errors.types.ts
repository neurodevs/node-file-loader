import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'







export declare namespace SpruceErrors.NodeFileLoader {

	
	export interface InvalidFileExtension {
		
			/** The expected file extension.. */
			'expected': string
			/** Path to the file with an invalid file extension.. */
			'path': string
	}

	export interface InvalidFileExtensionSchema extends SpruceSchema.Schema {
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

	export type InvalidFileExtensionEntity = SchemaEntity<SpruceErrors.NodeFileLoader.InvalidFileExtensionSchema>

}


export declare namespace SpruceErrors.NodeFileLoader {

	
	export interface FileNotFound {
		
			/** Path to the file that was not found.. */
			'path': string
	}

	export interface FileNotFoundSchema extends SpruceSchema.Schema {
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

	export type FileNotFoundEntity = SchemaEntity<SpruceErrors.NodeFileLoader.FileNotFoundSchema>

}


export declare namespace SpruceErrors.NodeFileLoader {

	
	export interface FileLoadFailed {
		
			/** Path to the file that failed to load.. */
			'path': string
	}

	export interface FileLoadFailedSchema extends SpruceSchema.Schema {
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

	export type FileLoadFailedEntity = SchemaEntity<SpruceErrors.NodeFileLoader.FileLoadFailedSchema>

}




