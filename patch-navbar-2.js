const fs = require('fs');
let data = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const mainNavStart = data.indexOf('<div className="max-w-7xl mx-auto px-4 sm:px-8">');
const headerStart = data.indexOf('<header');
const headerClose = data.indexOf('>', headerStart);

if (mainNavStart !== -1 && headerClose !== -1) {
  const before = data.substring(0, headerClose + 1);
  const after = data.substring(mainNavStart);
  fs.writeFileSync('src/components/Navbar.tsx', before + '\n      ' + after);
  console.log('Removed top utility bar correctly.');
} else {
  console.log('Could not find indices');
}
