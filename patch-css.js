const fs = require('fs');

let data = fs.readFileSync('src/app/globals.css', 'utf8');

// Strip out any null bytes or garbled text from the end
// We will just find the last valid block '::selection'
let lines = data.split('\n');
let cleanLines = [];
let foundSelection = false;

for (let line of lines) {
    // If it contains null bytes, ignore
    if (line.includes('\x00')) continue;
    cleanLines.push(line);
}

let cleanedStr = cleanLines.join('\n');

// Clean up weird spaces introduced by UTF-16
cleanedStr = cleanedStr.replace(/ \/ \*   H i d e.*/gs, ''); // regex to drop the bad part if it's there
cleanedStr = cleanedStr.split('/ *   H i')[0]; // fallback

const correctCss = `
/* Hide scrollbar for category scroll on mobile */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`;

fs.writeFileSync('src/app/globals.css', cleanedStr.trim() + '\n' + correctCss);
console.log('Fixed globals.css successfully');
