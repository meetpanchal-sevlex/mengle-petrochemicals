const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldHeadings = `<h1
                    className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em]"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    POWERING INDUSTRY. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      DELIVERING PERFORMANCE.
                    </span>
                  </h1>
                  <p
                    className="text-lg sm:text-xl text-slate-300 font-semibold tracking-tight"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Industrial Oil & Chemical Solutions
                  </p>`;

const newHeadings = `<h1
                    className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em]"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    Industrial Oil & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      Chemical Solutions
                    </span>
                  </h1>
                  <h2
                    className="text-sm sm:text-base text-slate-300 font-bold tracking-widest uppercase mt-2"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Powering Industry. Delivering Performance.
                  </h2>`;

pageData = pageData.replace(oldHeadings, newHeadings);

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Swapped h1 and h2 on homepage');
