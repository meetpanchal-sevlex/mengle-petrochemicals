const fs = require('fs');
let data = fs.readFileSync('src/app/compliance/page.tsx', 'utf8');

// Update auto-scroll distance to be exactly clientWidth (100% of the container width)
data = data.replace(
  'scrollRef.current.scrollBy({ left: window.innerWidth * 0.85, behavior: \'smooth\' });',
  'scrollRef.current.scrollBy({ left: clientWidth, behavior: \'smooth\' });'
);

// Update snapping behavior on the container to snap-mandatory so it forces exactly one card
data = data.replace(
  '<div ref={scrollRef} className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide mb-6">',
  '<div ref={scrollRef} className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide mb-6">'
);

// Update all cards from w-[85vw] to w-full min-w-full and snap-center instead of snap-start
// The container has `-mx-4 px-4` which means clientWidth includes padding. 
// For `snap-center` and `w-full` inside a container with padding, it works perfectly to just use min-w-[100%] or min-w-full.
// Actually, `w-full shrink-0` inside a flex container is exactly `100%` of the parent.
data = data.replace(/snap-start shrink-0 w-\[85vw\] sm:w-auto/g, 'snap-center shrink-0 w-full sm:w-auto');

fs.writeFileSync('src/app/compliance/page.tsx', data);
console.log('Patched compliance page for 100% width auto-scroll carousel');
