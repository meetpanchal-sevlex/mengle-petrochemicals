const fs = require('fs');

let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const regex = /\{\/\* Top Credentials Banner \*\/\}[\s\S]*?\{\/\* Main Footer Links & Depots \*\/\}/;

footerData = footerData.replace(regex, '{/* Main Footer Links & Depots */}');

fs.writeFileSync('src/components/Footer.tsx', footerData);
console.log('Removed duplicate credentials banner from footer');
