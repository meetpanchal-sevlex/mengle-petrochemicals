const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

const idMap = {
  'pyrolysis-oil': '/images/products/furnace-oil.jpeg',
  'recycled-base-oil': '/images/products/n150.jpeg',
  'light-liquid-paraffin': '/images/products/sn150.jpeg',
  'quenching-oil': '/images/products/n150.jpeg',
  'base-oil-range': '/images/products/sn500.jpeg',
  'mineral-turpentine-oil': '/images/products/mto.jpeg',
  'naphtha': '/images/products/benzene.jpeg',
  'c9-solvent': '/images/products/mto.jpeg',
  'c9-plus': '/images/products/mto.jpeg',
  'c10-solvent': '/images/products/benzene.jpeg',
  'benzene': '/images/products/benzene.jpeg',
  'toluene': '/images/products/benzene.jpeg',
  'crude-benzol': '/images/products/benzene.jpeg'
};

let count = 0;
for (const [id, img] of Object.entries(idMap)) {
  const regex = new RegExp(`(id:\\s*['"\`]${id}['"\`][\\s\\S]*?description:[^\\n]+,)`, 'g');
  if (!data.match(new RegExp(`id:\\s*['"\`]${id}['"\`][\\s\\S]*?image:\\s*`))) {
    data = data.replace(regex, `$1\n    image: "${img}",`);
    count++;
  }
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Added ' + count + ' placeholder images by ID');
