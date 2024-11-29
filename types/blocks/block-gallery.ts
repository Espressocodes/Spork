import type { File } from '../system';

export interface BlockGallery {
	headline?: string | null;
	id?: string;
	title?: string | null;
	images?: BlockGalleryFile[] | null;
}
export interface BlockGalleryFile {
	block_gallery?: (string | BlockGallery) | null;
	directus_files_id?: (string | File) | null;
	id?: number;
	sort?: number | null;
}
