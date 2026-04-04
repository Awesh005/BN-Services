import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const filesToCopy = [
  {
    from: path.join(rootDir, 'public', '.htaccess'),
    to: path.join(rootDir, 'dist', '.htaccess')
  }
];

await mkdir(path.join(rootDir, 'dist'), { recursive: true });

await Promise.all(
  filesToCopy.map(async ({ from, to }) => {
    await copyFile(from, to);
  })
);
