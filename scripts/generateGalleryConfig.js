import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sizeOf from 'image-size';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '../public/imgs/3D');
const outputFile = path.join(__dirname, '../src/config/galleryConfig.js');

// Create config directory if it doesn't exist
if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

const images = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
  .map(file => {
    const filePath = path.join(imagesDir, file);
    const buffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(buffer);
    return {
      src: `imgs/3D/${file}`,
      width: dimensions.width,
      height: dimensions.height
    };
  });

const configContent = `export const galleryImages = ${JSON.stringify(images, null, 2)};`;
fs.writeFileSync(outputFile, configContent);
console.log('Gallery configuration generated successfully!');