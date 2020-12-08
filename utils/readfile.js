import fs from 'fs';
import path from 'path';

export const getContents = (file) => {
    const filePath = path.join(process.cwd(), file);
    return fs.readFileSync(filePath, 'utf8');
}