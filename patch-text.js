const fs = require('fs');

// 1. Fix src/app/page.tsx (Homepage Hero Text)
let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldHeroText = `{COMPANY_INFO.description} Trusted partner for high-grade industrial fuels, base oils, specialty solvents, and aromatic hydrocarbons with consistent specs and prompt logistics.`;
const newHeroText = `Delivering lab-tested industrial fuels, base oils, and specialty solvents with uncompromising consistency and pan-India logistics.`;

pageData = pageData.replace(oldHeroText, newHeroText);
// Also increase the font size slightly for the hero paragraph to make it look premium
pageData = pageData.replace(
  'className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl"',
  'className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl"'
);

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Patched Homepage Hero Text');

// 2. Fix src/app/about/page.tsx (About Page Text)
let aboutData = fs.readFileSync('src/app/about/page.tsx', 'utf8');

const oldAboutText = `M Engle Petroleum is a professionally managed petroleum company focused on the distribution and supply of petroleum products and allied industrial solutions. We are committed to serving businesses with dependable products, consistent supply, and professional service, while maintaining a strong emphasis on statutory compliance and responsible operations.`;

const newAboutText = `We distribute premium petroleum products and industrial chemicals to businesses across India. Partner with us for dependable supply chains, lab-tested specifications, and uncompromising regulatory compliance.`;

aboutData = aboutData.replace(oldAboutText, newAboutText);

// Make the text bigger and more premium
aboutData = aboutData.replace(
  '<p className="text-slate-600 leading-relaxed text-sm sm:text-base">',
  '<p className="text-slate-600 leading-relaxed text-lg sm:text-xl font-medium">'
);

// Simplify the "MORE THAN PETROLEUM" box
const oldPartnerBox = `<div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    MORE THAN PETROLEUM. A PARTNER YOU CAN RELY ON.
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    M Engle Petroleum brings together product availability, reliable supply, professional service, and compliance to create a dependable petroleum sourcing partner for businesses.
                  </p>
                </div>`;

const newPartnerBox = `<div className="p-5 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="font-extrabold text-amber-900 text-sm tracking-wide mb-1">
                    MORE THAN PETROLEUM
                  </div>
                  <p className="text-sm text-amber-800/80 leading-relaxed font-medium">
                    We bring together vast product availability, reliable logistics, and strict PESO compliance to create the ultimate sourcing partner for your industrial operations.
                  </p>
                </div>`;

aboutData = aboutData.replace(oldPartnerBox, newPartnerBox);

fs.writeFileSync('src/app/about/page.tsx', aboutData);
console.log('Patched About Page Text');
