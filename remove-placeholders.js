const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

// Remove the incorrect image lines
const toRemove = [
  { id: 'c9-plus-solvent', img: '/images/products/mto.jpeg' },
  { id: 'c10-solvent', img: '/images/products/benzene.jpeg' },
  { id: 'benzene', img: '/images/products/benzene.jpeg' },
  { id: 'toluene', img: '/images/products/benzene.jpeg' },
  { id: 'naphtha', img: '/images/products/benzene.jpeg' },
  { id: 'c9-solvent', img: '/images/products/mto.jpeg' },
  { id: 'pyrolysis-oil', img: '/images/products/furnace-oil.jpeg' },
  { id: 'recycled-base-oil', img: '/images/products/n150.jpeg' },
  { id: 'light-liquid-paraffin', img: '/images/products/sn150.jpeg' },
  { id: 'quenching-oil', img: '/images/products/n150.jpeg' },
  { id: 'base-oil-range', img: '/images/products/sn500.jpeg' }
];

for (const item of toRemove) {
  const regex = new RegExp(`(id:\\s*['"\`]${item.id}['"\`][\\s\\S]*?)(image:\\s*['"\`]${item.img}['"\`],\\n\\s*)`, 'g');
  data = data.replace(regex, '$1');
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Removed misleading placeholders');
