const fs = require('fs');
let data = fs.readFileSync('src/app/about/page.tsx', 'utf8');

// 1. Add framer-motion import
if (!data.includes("import { motion } from 'framer-motion'")) {
    data = data.replace(
        "import React from 'react';",
        "import React from 'react';\nimport { motion } from 'framer-motion';"
    );
}

// 2. Replace the strengths map
const oldMapStr = `{COMPANY_INFO.coreStrengths.map((strength, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-colors flex items-start gap-4">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{strength.title}</div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{strength.desc}</p>
                    </div>
                  </div>
                ))}`;

const newMapStr = `{COMPANY_INFO.coreStrengths.map((strength, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 40, rotateX: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.6, type: 'spring', bounce: 0.4 }}
                    style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
                    className="p-5 rounded-2xl bg-gradient-to-b from-white to-slate-50/50 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-start gap-4 relative overflow-hidden group hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300"
                  >
                    {/* Subtle Top highlight for 3D bevel effect */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                    
                    {/* 3D Number Badge */}
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-slate-700 to-slate-900 text-amber-400 flex items-center justify-center font-extrabold text-sm shrink-0 mt-0.5 shadow-lg shadow-slate-900/20 border-t border-slate-600/50 border-b border-slate-950">
                      {i + 1}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="font-extrabold text-slate-900 text-sm mb-1">{strength.title}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{strength.desc}</p>
                    </div>
                  </motion.div>
                ))}`;

data = data.replace(oldMapStr, newMapStr);

fs.writeFileSync('src/app/about/page.tsx', data);
console.log('Added 3D animated cards to about page');
