const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

const idMap = {
  'pyrolysis-oil': '/images/products/pyrolysis.jpeg',
  'recycled-base-oil': '/images/products/recycled.jpeg',
  'light-liquid-paraffin': '/images/products/llp.jpeg',
  'quenching-oil': '/images/products/quenching.jpeg',
  'base-oil-range': '/images/products/base-oil.jpeg',
  'mineral-turpentine-oil': '/images/products/mto.jpeg',
  'naphtha': '/images/products/naphtha.jpeg',
  'c9-solvent': '/images/products/c9.jpeg',
  'c9-plus-solvent': '/images/products/c9-plus.jpeg',
  'c10-solvent': '/images/products/c10.jpeg',
  'benzene': '/images/products/benzene-pure.jpeg',
  'toluene': '/images/products/toluene.jpeg',
  'crude-benzol': '/images/products/benzene.jpeg' // this one is the original brochure image
};

// Add the images back to the specific products
for (const [id, img] of Object.entries(idMap)) {
  const regex = new RegExp(`(id:\\s*['"\`]${id}['"\`][\\s\\S]*?description:[^\\n]+,)`, 'g');
  if (!data.match(new RegExp(`id:\\s*['"\`]${id}['"\`][\\s\\S]*?image:\\s*`))) {
    data = data.replace(regex, `$1\n    image: "${img}",`);
  }
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Mapped custom generated labels');
