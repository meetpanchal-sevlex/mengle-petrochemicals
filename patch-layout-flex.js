const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Make body a flex column and wrap children in flex-1 to push footer down
layout = layout.replace(
  /<body className="min-h-screen bg-\[#FAFAFA\] text-\[#0B1120\] antialiased">([\s\S]*?)<Navbar \/>\s*\{children\}\s*<Footer \/>/,
  `<body className="min-h-screen bg-[#FAFAFA] text-[#0B1120] antialiased flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />`
);

fs.writeFileSync('src/app/layout.tsx', layout);
console.log('Fixed white space below footer using Flexbox.');
