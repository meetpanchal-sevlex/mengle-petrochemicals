const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

// Add image field to Product interface
if (!data.includes('image?: string;')) {
  data = data.replace('description: string;', 'description: string;\n  image?: string;');
}

// Map the images we found to their products
const imageMap = {
  'BO-LDO-001': '/images/products/ldo.jpeg',
  'BO-FO-002': '/images/products/furnace-oil.jpeg',
  'BO-FULO-003': '/images/products/fuel-oil.jpeg',
  'BO-LSHS-004': '/images/products/lshs.jpeg',
  'BS-SN150-008': '/images/products/sn150.jpeg',
  'BS-SN500-009': '/images/products/sn500.jpeg',
  'BS-N150-010': '/images/products/n150.jpeg',
  'SOL-MTO-013': '/images/products/mto.jpeg',
  'ARO-BNZ-018': '/images/products/benzene.jpeg'
};

for (const [code, img] of Object.entries(imageMap)) {
  const regex = new RegExp(`(code:\\s*['"\`]${code}['"\`],\\n\\s*name:[^\\n]+,\\n\\s*category:[^\\n]+,\\n\\s*shortDesc:[^\\n]+,\\n\\s*description:[^\\n]+,)`, 'g');
  data = data.replace(regex, `$1\n    image: "${img}",`);
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Updated companyData.ts with images');
