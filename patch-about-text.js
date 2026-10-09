const fs = require('fs');

let page = fs.readFileSync('src/app/about/page.tsx', 'utf8');

// 1. Cut down the Hero text
page = page.replace(
  'We distribute premium petroleum products and industrial chemicals to businesses across India. Partner with us for dependable supply chains, lab-tested specifications, and rigorous regulatory compliance.',
  'Distributing premium petroleum and industrial chemicals across India with lab-tested specifications and uncompromising compliance.'
);

// 2. Cut down Mission text
page = page.replace(
  'To simplify petroleum procurement for businesses by providing dependable products, reliable supply, and professional service—every single time. We bridge the gap between complex refinery outputs and precise industrial requirements.',
  'Simplifying petroleum procurement with dependable supply, professional service, and certified quality.'
);

// 3. Cut down Vision text
page = page.replace(
  'To develop M Engle Petroleum into a universally trusted and recognized petroleum distribution company, known industry-wide for reliable products, professional service, regulatory responsibility, and long-term customer relationships.',
  "To be India's most trusted petroleum distributor, recognized for regulatory responsibility and long-term partnerships."
);

// 4. Reduce roundness on cards from 3xl to 2xl on mobile to look less "bubbly"
page = page.replace(
  /rounded-3xl/g,
  'rounded-2xl sm:rounded-3xl'
);

// 5. Shrink text sizes slightly more on mobile for the paragraphs
page = page.replace(
  /text-\[15px\] sm:text-base/g,
  'text-sm sm:text-base'
);
page = page.replace(
  /text-base sm:text-xl/g,
  'text-[15px] sm:text-lg'
);

fs.writeFileSync('src/app/about/page.tsx', page);
console.log('Applied aggressive text reduction and de-chunkification.');
