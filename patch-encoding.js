const fs = require('fs');

let data = fs.readFileSync('src/app/page.tsx', 'utf8');

// Strip out any null bytes
data = data.replace(/\x00/g, '');

// Clean any trailing whitespace or corrupted garbage after the final closing brace of the component.
const lastBraceIndex = data.lastIndexOf('}');
if (lastBraceIndex !== -1) {
    data = data.substring(0, lastBraceIndex + 1) + '\n';
}

fs.writeFileSync('src/app/page.tsx', data);
console.log('Fixed page.tsx encoding');
