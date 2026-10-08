const fs = require('fs');

let data = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Find the PESO span
const targetSpanStart = data.indexOf('<span className="flex items-center gap-1.5 text-amber-400');
const spanClosing = data.indexOf('</span>', targetSpanStart) + 7;

if (targetSpanStart !== -1) {
    const before = data.substring(0, targetSpanStart);
    const after = data.substring(spanClosing);
    
    fs.writeFileSync('src/components/Navbar.tsx', before + after);
    console.log('Removed PESO line from Navbar');
} else {
    console.log('Could not find PESO span');
}
