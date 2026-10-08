const fs = require('fs');
let data = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

data = data.replace(
  /const GOOGLE_SHEET_CSV_URL = "PASTE_YOUR_GOOGLE_SHEET_CSV_LINK_HERE";/g,
  'const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDPCHWI7Rg2dBe9p9Sf-DZX02CdEZ-L6BWlb9pkSJN8l6jxJUEgC3vtabWOe_zScumaxy7iKOiOJZ6/pub?output=csv";'
);

fs.writeFileSync('src/app/price-list/page.tsx', data);
console.log('Successfully injected Google Sheet CSV URL!');
