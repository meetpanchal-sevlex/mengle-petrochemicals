const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

const idMap = {
    'light-diesel-oil': '/images/products/ldo_real.jpeg',
    'furnace-oil': '/images/products/furnace-oil_real.jpeg',
    'fuel-oil': '/images/products/fuel-oil_real.jpeg',
    'lshs': '/images/products/lshs_real.jpeg',
    
    // Using the programmatically corrected labels for the rest
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
    'crude-benzol': '/images/products/benzene.jpeg' // The original brochure image for Benzol
};

// Strip existing images
data = data.replace(/\s*image:\s*['"][^'"]+['"],/g, '');

for (const [id, img] of Object.entries(idMap)) {
    // strict match for id
    const idRegex = new RegExp(`(id:\\s*['"\`]${id}['"\`],)`);
    if(data.match(idRegex)) {
        data = data.replace(idRegex, `$1\n    image: "${img}",`);
    } else {
        console.error("COULD NOT FIND ID:", id);
    }
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Fixed final mappings.');
