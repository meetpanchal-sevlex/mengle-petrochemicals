const fs = require('fs');
let data = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

data = data.replace(
  '<a href="/compliance" className="hover:text-slate-900 transition-colors">Compliance</a>',
  '<a href="/compliance" className="hover:text-slate-900 transition-colors">Compliance</a>\n          <Link href="/price-list" className="hover:text-slate-900 transition-colors font-semibold text-amber-600">Price List</Link>'
);

fs.writeFileSync('src/components/Navbar.tsx', data);
console.log('Fixed Desktop Navbar links');
