const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Fix category array links
nav = nav.replace(/href: "#/g, 'href: "/#');

// Fix the "View all products" dropdown link
nav = nav.replace(/href="#products"/g, 'href="/#products"');

fs.writeFileSync('src/components/Navbar.tsx', nav);
console.log('Fixed broken anchor links in global Navbar.');
