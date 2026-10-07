const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

const idMap = [
    'light-diesel-oil', 'furnace-oil', 'fuel-oil', 'lshs', 'pyrolysis-oil', 
    'recycled-base-oil', 'light-liquid-paraffin', 'quenching-oil', 'base-oil-range', 
    'mineral-turpentine-oil', 'naphtha', 'c9-solvent', 'c9-plus-solvent', 
    'c10-solvent', 'benzene', 'toluene', 'crude-benzol'
];

// Strip ALL image lines
data = data.replace(/\s*image:\s*['"][^'"]+['"],/g, '');

for (const id of idMap) {
    const img = `/images/products/FINAL_${id}.jpeg`;
    const idRegex = new RegExp(`(id:\\s*['"\`]${id}['"\`],)`);
    if(data.match(idRegex)) {
        data = data.replace(idRegex, `$1\n    image: "${img}",`);
    } else {
        console.error('MISSING ID:', id);
    }
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Final mapping applied');
