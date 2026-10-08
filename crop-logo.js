const sharp = require('sharp');
const fs = require('fs');

async function cropLogo() {
  try {
    const inputPath = 'public/images/logo.png';
    const outputPath = 'public/images/logo_cropped.png';
    
    await sharp(inputPath)
      .trim() // Automatically removes background borders (white/transparent)
      .toFile(outputPath);
      
    // Replace the original with cropped
    fs.copyFileSync(outputPath, inputPath);
    console.log('Logo successfully cropped!');
  } catch (error) {
    console.error('Error cropping logo:', error);
  }
}

cropLogo();
