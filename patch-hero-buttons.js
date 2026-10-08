const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

const startAnchor1 = pageData.indexOf('<a\n                    href="/brochure.pdf"');
const endAnchor1 = pageData.indexOf('</a>', startAnchor1) + 4;

if (startAnchor1 !== -1 && endAnchor1 !== -1) {
    const toRemove1 = pageData.substring(startAnchor1, endAnchor1);
    pageData = pageData.replace(toRemove1, '');
}

const startAnchor2 = pageData.indexOf('<a\n                    href={`tel:${COMPANY_INFO.phoneRaw}`}');
const endAnchor2 = pageData.indexOf('</a>', startAnchor2) + 4;

if (startAnchor2 !== -1 && endAnchor2 !== -1) {
    const toRemove2 = pageData.substring(startAnchor2, endAnchor2);
    pageData = pageData.replace(toRemove2, '');
}

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Removed redundant buttons from Hero');
