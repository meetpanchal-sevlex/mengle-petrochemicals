const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

const idMap = {
    'ldo': '/images/products/ldo_real.jpeg',
    'fuel-oil': '/images/products/fuel-oil_real.jpeg',
    'furnace-oil': '/images/products/furnace-oil_real.jpeg',
    'lshs': '/images/products/lshs_real.jpeg',
    'pyrolysis-oil': '/images/products/pyrolysis-oil_real.jpeg',
    'recycled-base-oil': '/images/products/recycled-base-oil_real.jpeg',
    'light-liquid-paraffin': '/images/products/light-liquid-paraffin_real.jpeg',
    'quenching-oil': '/images/products/quenching-oil_real.jpeg',
    'base-oil-range': '/images/products/base-oil-range_real.jpeg',
    'mineral-turpentine-oil': '/images/products/mineral-turpentine-oil_real.jpeg',
    'naphtha': '/images/products/naphtha_real.jpeg',
    'c9-solvent': '/images/products/c9-solvent_real.jpeg',
    'c9-plus-solvent': '/images/products/c9-plus-solvent_real.jpeg',
    'c10-solvent': '/images/products/c10-solvent_real.jpeg',
    'benzene': '/images/products/benzene_real.jpeg',
    'toluene': '/images/products/toluene_real.jpeg',
    'crude-benzol': '/images/products/crude-benzol_real.jpeg'
};

for (const [id, img] of Object.entries(idMap)) {
  const replaceRegex = new RegExp(`(id:\\s*['"\`]${id}['"\`][\\s\\S]*?image:\\s*['"\`])[^'"\`]+(['"\`],)`, 'g');
  if (data.match(replaceRegex)) {
      data = data.replace(replaceRegex, `$1${img}$2`);
  } else {
      const addRegex = new RegExp(`(id:\\s*['"\`]${id}['"\`][\\s\\S]*?description:[^\\n]+,)`, 'g');
      data = data.replace(addRegex, `$1\n    image: "${img}",`);
  }
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Successfully mapped all REAL brochure images');
