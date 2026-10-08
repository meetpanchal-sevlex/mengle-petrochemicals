const fs = require('fs');

const files = [
  'src/app/about/page.tsx',
  'src/app/compliance/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/price-list/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className="min-h-screen pt-20 /g, 'className="min-h-screen ');
  content = content.replace(/className="min-h-screen pb-12 bg-slate-50 pt-\[68px\]"/g, 'className="min-h-screen pb-12 bg-slate-50"');
  fs.writeFileSync(file, content);
});

console.log('Removed duplicate top padding from all subpages.');
