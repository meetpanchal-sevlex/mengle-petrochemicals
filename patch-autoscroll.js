const fs = require('fs');

let data = fs.readFileSync('src/app/compliance/page.tsx', 'utf8');

// 1. Add useRef and useEffect imports
if (!data.includes('useRef')) {
    data = data.replace(
        "import React from 'react';",
        "import React, { useRef, useEffect } from 'react';"
    );
}

// 2. Insert the hook into the component
const hookLogic = `
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only auto-scroll on mobile (where the container is scrollable)
    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 640) { // sm breakpoint
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we are near the end, reset to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll forward by one card width (~85vw or roughly 300px)
          scrollRef.current.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
        }
      }
    }, 2500); // 2.5 seconds per slide

    return () => clearInterval(interval);
  }, []);
`;

data = data.replace(
    'export default function CompliancePage() {',
    `export default function CompliancePage() {${hookLogic}`
);

// 3. Attach the ref to the scroll container
data = data.replace(
    '<div className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide mb-6">',
    '<div ref={scrollRef} className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide mb-6">'
);

fs.writeFileSync('src/app/compliance/page.tsx', data);
console.log('Added auto-scroll hook');
