const fs = require('fs');

let page = fs.readFileSync('src/app/about/page.tsx', 'utf8');

const regex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" style=\{\{ perspective: 1200 \}\}>[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" style={{ perspective: 1200 }}>
            {COMPANY_INFO.coreStrengths.map((strength, i) => {
              const Icon = icons[i % icons.length];
              const iconColors = [
                "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-200",
                "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200",
                "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100 group-hover:border-purple-200",
                "bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100 group-hover:border-rose-200",
                "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100 group-hover:border-amber-200"
              ];
              const colorClass = iconColors[i % iconColors.length];

              return (
                <motion.div 
                  key={i}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateX: 4, 
                    rotateY: -4,
                    z: 20
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-200/80 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-slate-300 group cursor-pointer relative z-10 hover:z-20 flex items-start gap-4 transition-colors"
                >
                  <div 
                    style={{ transform: "translateZ(40px)" }}
                    className={\`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors \${colorClass}\`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div style={{ transform: "translateZ(20px)" }} className="pt-0.5">
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 mb-1 leading-tight group-hover:text-slate-700 transition-colors">{strength.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">{strength.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>`;

page = page.replace(regex, newSection);

fs.writeFileSync('src/app/about/page.tsx', page);
console.log('Applied horizontal layout and colored icons to Core Strengths.');
