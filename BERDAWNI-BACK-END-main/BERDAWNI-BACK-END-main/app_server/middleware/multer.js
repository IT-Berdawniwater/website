import multer from 'multer';

const fileStorageEngine = multer.diskStorage({});

const upload = multer({ storage: fileStorageEngine});

export default upload;