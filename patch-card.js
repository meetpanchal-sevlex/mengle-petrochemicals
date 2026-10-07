const fs = require('fs');
let data = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');

data = data.replace('className="p-6 pb-4"', 'className="p-5 lg:p-6 pb-4"');
data = data.replace('className="p-6 pt-3', 'className="p-5 lg:p-6 pt-4');
data = data.replace('className="text-lg font-bold', 'className="text-base lg:text-lg font-bold');

fs.writeFileSync('src/components/ProductCard.tsx', data);
console.log('ProductCard cleaned up');
