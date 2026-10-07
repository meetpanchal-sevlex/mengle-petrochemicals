const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

const newOfficesGrid = `
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              {/* Ahmedabad Branch */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 lg:p-6 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      Gujarat Branch
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">Ahmedabad Hub</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    Ahmedabad Office
                  </h3>

                  <div className="flex items-start gap-2.5 text-xs text-slate-600 mb-3">
                    <p className="leading-snug">
                      A622, Moneyplant Highstreet, Jagatpur Road, Sarkhej-Gandhinagar Highway, Nr. BSNL Office, Ahmedabad – 382470 (INDIA)
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-5 pb-4 border-b border-slate-100">
                    <span>Mon - Sat (9:00 AM - 7:00 PM)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={\`tel:\${COMPANY_INFO.phoneRaw}\`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-3 rounded-xl text-xs text-center transition-colors shadow-sm"
                  >
                    Call Office
                  </a>
                  <a
                    href="https://maps.google.com/?q=Moneyplant+Highstreet+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition-colors border border-slate-200"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Indore Registered Office */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 lg:p-6 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-100">
                      HQ / Reg. Office
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">MP Hub</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    Indore Office
                  </h3>

                  <div className="flex items-start gap-2.5 text-xs text-slate-600 mb-3">
                    <p className="leading-snug">
                      B-102 Samarth Park Behind Dmart Mhow, Indore – 453441 (MADHYA PRADESH - INDIA)
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-5 pb-4 border-b border-slate-100">
                    <span>Mon - Sat (9:00 AM - 7:00 PM)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={\`tel:\${COMPANY_INFO.phoneRaw}\`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-3 rounded-xl text-xs text-center transition-colors shadow-sm"
                  >
                    Call Office
                  </a>
                  <a
                    href="https://maps.google.com/?q=Samarth+Park+Mhow+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition-colors border border-slate-200"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
`;

let found = pageData.match(/<div className="grid grid-cols-1 md:grid-cols-2 gap-8">([\s\S]*?)<section id="contact"/);

if (found) {
  let toReplace = found[1];
  pageData = pageData.replace(toReplace, newOfficesGrid + '\n            </div>\n          </section>\n\n          ');
  pageData = pageData.replace('<div className="grid grid-cols-1 md:grid-cols-2 gap-8">', '');
} else {
  console.log("Could not find block");
}

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Fixed offices UI cleanly');
