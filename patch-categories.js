const fs = require('fs');
let data = fs.readFileSync('src/app/page.tsx', 'utf8');
data = data.replace('flex flex-wrap items-center gap-3 pt-2', 'flex items-center gap-3 pt-2 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:pb-2 scrollbar-hide snap-x');
// also add snap-align to the buttons
data = data.replace('<button\n                      key={cat}', '<button\n                      key={cat}\n                      className="snap-start shrink-0"');
fs.writeFileSync('src/app/page.tsx', data);
console.log('Fixed page categories');
