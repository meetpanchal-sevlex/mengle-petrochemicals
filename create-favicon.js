const sharp = require('sharp');
const fs = require('fs');

async function createFavicon() {
  try {
    const inputPath = 'public/images/logo_cropped.png';
    const outputPath = 'src/app/icon.png';
    
    await sharp(inputPath)
      .resize({
        width: 192,
        height: 192,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent padding
      })
      .toFile(outputPath);
      
    // Delete the default Next.js favicon
    if (fs.existsSync('src/app/favicon.ico')) {
      fs.unlinkSync('src/app/favicon.ico');
    }
    
    console.log('Favicon successfully created!');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
