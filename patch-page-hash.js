const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure useEffect is imported
if (!page.includes('useEffect')) {
  page = page.replace(/import React, { useState, useMemo } from 'react';/, "import React, { useState, useMemo, useEffect } from 'react';");
}

// Inject the useEffect for hash routing inside HomePage
const hookCode = `
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#products-black-oils') setSelectedCategory('Black Oils');
      else if (hash === '#products-white-oils') setSelectedCategory('White Oils');
      else if (hash === '#products-base-oils') setSelectedCategory('Base Oils');
      else if (hash === '#products-solvents') setSelectedCategory('Solvents');
      else if (hash === '#products-aromatics') setSelectedCategory('Aromatic Petrochemicals');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
`;

page = page.replace(
  /const categories = \['All', 'Black Oils', 'White Oils', 'Base Oils', 'Solvents', 'Aromatic Petrochemicals'\];/,
  `${hookCode}\n  const categories = ['All', 'Black Oils', 'White Oils', 'Base Oils', 'Solvents', 'Aromatic Petrochemicals'];`
);

// Inject the invisible anchor IDs right inside the products section
const anchorsCode = `
            {/* Hidden Anchors for Routing */}
            <div id="products-black-oils" className="absolute -top-24 pointer-events-none" />
            <div id="products-white-oils" className="absolute -top-24 pointer-events-none" />
            <div id="products-base-oils" className="absolute -top-24 pointer-events-none" />
            <div id="products-solvents" className="absolute -top-24 pointer-events-none" />
            <div id="products-aromatics" className="absolute -top-24 pointer-events-none" />

            {/* Category Filter Tabs */}
`;

page = page.replace(
  /\{\/\* Category Filter Tabs \*\/\}/,
  anchorsCode
);

// Ensure the #products section is relative so the absolute anchors position correctly
page = page.replace(
  /<section id="products" className="py-20 bg-slate-100\/70 border-b border-slate-200">/,
  '<section id="products" className="py-20 bg-slate-100/70 border-b border-slate-200 relative">'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Patched page.tsx with hash routing logic.');
