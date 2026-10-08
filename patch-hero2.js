const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

// Use regex to remove both anchors
pageData = pageData.replace(/<a[\s\S]*?href="\/brochure\.pdf"[\s\S]*?<\/a>/g, '');
pageData = pageData.replace(/<a[\s\S]*?href=\{\`tel:\$\{COMPANY_INFO\.phoneRaw\}\`\}[\s\S]*?<\/a>/g, '');

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Removed redundant buttons from Hero using regex');
