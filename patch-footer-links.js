const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/href="#products/g, 'href="/#products');
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log('Fixed broken anchor links in Footer.');
