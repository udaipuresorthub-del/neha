const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');
  
  const logoSvgPath = path.join(publicDir, 'logo.svg');
  const faviconSvgPath = path.join(publicDir, 'favicon.svg');
  
  const logoSvg = fs.readFileSync(logoSvgPath);
  const faviconSvg = fs.readFileSync(faviconSvgPath);
  
  console.log('Rendering logo.png...');
  await sharp(logoSvg, { density: 300 })
    .resize(680, 144)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  console.log('Rendering favicon.png (64x64)...');
  await sharp(faviconSvg, { density: 300 })
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  console.log('Rendering apple-touch-icon.png (180x180)...');
  await sharp(faviconSvg, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Rendering app icons...');
  await sharp(faviconSvg, { density: 300 })
    .resize(192, 192)
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  await sharp(faviconSvg, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // Also write favicon.ico from 32x32 png
  await sharp(faviconSvg, { density: 300 })
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('All brand assets successfully generated!');
}

run().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
