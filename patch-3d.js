const fs = require('fs');

let page = fs.readFileSync('src/app/about/page.tsx', 'utf8');

const oldGrid = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreStrengths.map((strength, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div 
                  key={i} 
                  className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{strength.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{strength.desc}</p>
                </div>
              );
            })}
          </div>`;

const newGrid = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" style={{ perspective: 1200 }}>
            {COMPANY_INFO.coreStrengths.map((strength, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div 
                  key={i}
                  whileHover={{ 
                    scale: 1.03, 
                    rotateX: 5, 
                    rotateY: -5,
                    z: 30
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-amber-300/80 group cursor-pointer relative z-10 hover:z-20"
                >
                  <div 
                    style={{ transform: "translateZ(40px)" }}
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center mb-4 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors shadow-sm"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div style={{ transform: "translateZ(30px)" }}>
                    <h3 className="text-[15px] sm:text-base font-bold text-slate-900 mb-1.5 leading-tight group-hover:text-amber-600 transition-colors">{strength.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">{strength.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>`;

// Check if oldGrid matches EXACTLY. Sometimes formatting differs.
// Let's use a more robust regex replacement in case of whitespace differences.
const regex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `${newGrid}
          </div>
        </section>`;

page = page.replace(regex, newSection);

fs.writeFileSync('src/app/about/page.tsx', page);
console.log('Applied 3D animation and compact styling to Core Strengths.');
