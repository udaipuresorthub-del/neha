import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.resolve(__dirname, '../public/images');

// Read all files in public/images
const allFiles = fs.readdirSync(imagesDir);
const rawJpgs = allFiles.filter(f => f.startsWith('IMG-') && f.endsWith('.jpg')).sort();

console.log(`Found ${rawJpgs.length} raw JPG files in public/images.`);

if (rawJpgs.length === 0) {
  console.log('No raw files starting with IMG- found.');
  process.exit(0);
}

// 1. Canonical list required by site.ts, blogs.ts, layout.tsx, and pages
const canonicalMap = [
  "udaipur-escort-service.jpg",
  "premium-escort-service-udaipur.jpg",
  "russian-escort-in-udaipur.jpg",
  "independent-call-girls-udaipur.jpg",
  "udaipur-escort-companion.jpg",
  "beautiful-escort-girls-udaipur.jpg",
  "model-call-girl-service-udaipur.jpg",
  "high-class-call-girls-udaipur.jpg",
  "beautiful-independent-escort-udaipur.jpg",
  "beautiful-model-escort-udaipur.jpg",
  "classy-escort-service-udaipur.jpg",
  "elegant-udaipur-escorts.jpg",
  "high-profile-udaipur-escorts.jpg",
  "hot-escort-girls-udaipur.jpg",
  "luxury-escort-service-udaipur.jpg",
  "professional-udaipur-escorts.jpg",
  "romantic-companion-udaipur-escort.jpg",
  "top-escorts-in-udaipur.jpg",
  "vip-escort-in-udaipur.jpg",
  "hotel-escort-service-udaipur.jpg",
  "model-escorts-in-udaipur.jpg",
  "private-escort-meet-udaipur.jpg",
  "top-rated-call-girl-udaipur.jpg",
  "call-girls-in-udaipur.jpg",
  "udaipur-call-girls.jpg",
  "lake-pichola-escorts-udaipur.jpg",
  "fateh-sagar-call-girls-udaipur.jpg",
  "city-palace-escorts-udaipur.jpg",
  "oberoi-udaivilas-escorts.jpg",
  "leela-palace-escorts-udaipur.jpg",
  "raffles-udaipur-escorts.jpg"
];

let rawIndex = 0;

canonicalMap.forEach(targetName => {
  const source = rawJpgs[rawIndex % rawJpgs.length];
  const srcPath = path.join(imagesDir, source);
  const destPath = path.join(imagesDir, targetName);
  fs.copyFileSync(srcPath, destPath);
  rawIndex++;
});
console.log(`Created ${canonicalMap.length} canonical SEO images.`);

// 2. Create structured SEO filenames for rich homepage gallery and profiles
const categories = [
  { prefix: "vip-escorts-udaipur", count: 20 },
  { prefix: "russian-call-girls-udaipur", count: 20 },
  { prefix: "independent-call-girls-udaipur", count: 20 },
  { prefix: "college-call-girls-udaipur", count: 20 },
  { prefix: "luxury-resort-escorts-udaipur", count: 20 },
  { prefix: "celebrity-escorts-udaipur", count: 15 },
  { prefix: "high-class-escort-udaipur", count: 15 },
  { prefix: "lake-pichola-call-girls", count: 12 },
  { prefix: "fateh-sagar-escorts", count: 12 }
];

let createdCategoriesCount = 0;
categories.forEach(cat => {
  for (let i = 1; i <= cat.count; i++) {
    const numStr = String(i).padStart(2, '0');
    const targetName = `${cat.prefix}-${numStr}.jpg`;
    const source = rawJpgs[rawIndex % rawJpgs.length];
    const srcPath = path.join(imagesDir, source);
    const destPath = path.join(imagesDir, targetName);
    fs.copyFileSync(srcPath, destPath);
    rawIndex++;
    createdCategoriesCount++;
  }
});

console.log(`Created ${createdCategoriesCount} categorized SEO image files.`);
console.log('All image SEO files created successfully!');
