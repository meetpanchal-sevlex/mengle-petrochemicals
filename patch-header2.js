const fs = require('fs');

let data = fs.readFileSync('src/app/page.tsx', 'utf8');

const startStr = '<h1';
const endStr = 'Industrial Oil & Chemical Solutions';

const startIdx = data.indexOf(startStr);
const endIdx = data.indexOf(endStr);
const closingPIdx = data.indexOf('</p>', endIdx) + 4;

if (startIdx !== -1 && endIdx !== -1 && closingPIdx !== -1) {
  const before = data.substring(0, startIdx);
  const after = data.substring(closingPIdx);
  
  const newBlock = `<h1
                    className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em]"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    Industrial Oil & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      Chemical Solutions
                    </span>
                  </h1>
                  <h2
                    className="text-sm sm:text-base text-slate-300 font-bold tracking-widest uppercase mt-3"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Powering Industry. Delivering Performance.
                  </h2>`;

  fs.writeFileSync('src/app/page.tsx', before + newBlock + after);
  console.log('Successfully swapped!');
} else {
  console.log('Could not find indices', { startIdx, endIdx, closingPIdx });
}
