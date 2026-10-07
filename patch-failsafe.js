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

// First, strip ALL existing image: lines to ensure a totally clean slate
data = data.replace(/\s*image:\s*['"][^'"]+['"],/g, '');

// Now, insert the image field right after the id field
for (const [id, img] of Object.entries(idMap)) {
    const idRegex = new RegExp(`(id:\\s*['"\`]${id}['"\`],)`);
    data = data.replace(idRegex, `$1\n    image: "${img}",`);
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Fixed mapping perfectly');
