const fs = require('fs');

// 1. Update layout.tsx
let layoutData = fs.readFileSync('src/app/layout.tsx', 'utf8');
if (!layoutData.includes("import Navbar")) {
  layoutData = layoutData.replace(
    'export default function RootLayout({',
    `import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function RootLayout({`
  );
  
  layoutData = layoutData.replace(
    '<body className="min-h-screen bg-[#FAFAFA] text-[#0B1120] antialiased">',
    `<body className="min-h-screen bg-[#FAFAFA] text-[#0B1120] antialiased">
        <Navbar />`
  );
  
  layoutData = layoutData.replace(
    '{children}',
    `{children}
        <Footer />
        <FloatingActions />`
  );
  fs.writeFileSync('src/app/layout.tsx', layoutData);
}

// 2. Remove them from page.tsx
let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');
pageData = pageData.replace(/<Navbar \/>\n/g, '');
pageData = pageData.replace(/<Footer \/>\n/g, '');
pageData = pageData.replace(/<FloatingActions \/>\n/g, '');
// Also remove imports from page.tsx to avoid warnings
pageData = pageData.replace(/import Navbar from '@\/components\/Navbar';\n/g, '');
pageData = pageData.replace(/import Footer from '@\/components\/Footer';\n/g, '');
pageData = pageData.replace(/import FloatingActions from '@\/components\/FloatingActions';\n/g, '');
fs.writeFileSync('src/app/page.tsx', pageData);

console.log('Global Layout Fixed: Navbar and Footer are now on all pages!');
