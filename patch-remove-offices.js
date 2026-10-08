const fs = require('fs');

// 1. Remove from page.tsx
let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find the start of the offices section
const officesStart = pageData.indexOf('<section id="offices"');
// Find the start of the contact section right after it
const contactStart = pageData.indexOf('<section id="contact"');

if (officesStart !== -1 && contactStart !== -1) {
    const beforeOffices = pageData.substring(0, officesStart);
    const afterOffices = pageData.substring(contactStart);
    fs.writeFileSync('src/app/page.tsx', beforeOffices + '        ' + afterOffices);
    console.log('Removed #offices section from page.tsx');
} else {
    console.log('Could not find #offices or #contact section');
}

// 2. Remove from Navbar.tsx
let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Desktop link
navData = navData.replace('<a href="#offices" className="hover:text-slate-900 transition-colors">Locations</a>', '');

// Mobile links array
navData = navData.replace(
    "['/', '#about', '#credentials', '#offices', '#contact']",
    "['/', '#about', '#credentials', '#contact']"
);
navData = navData.replace(
    "['Home', 'About Us', 'Compliance & Licenses', 'Depot Locations', 'Contact']",
    "['Home', 'About Us', 'Compliance & Licenses', 'Contact']"
);

fs.writeFileSync('src/components/Navbar.tsx', navData);
console.log('Removed #offices links from Navbar.tsx');
