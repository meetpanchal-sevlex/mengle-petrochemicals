const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

const imageMap = {
  'BO-PYO-005': '/images/products/furnace-oil.jpeg', 
  'BO-RBO-006': '/images/products/n150.jpeg',        
  'WO-LLP-007': '/images/products/sn150.jpeg',       
  'BS-LUB32-011': '/images/products/sn150.jpeg',     
  'BS-LUB100-012': '/images/products/sn500.jpeg',    
  'SOL-NAP-014': '/images/products/mto.jpeg',        
  'SOL-C9-015': '/images/products/mto.jpeg',         
  'SOL-C9P-016': '/images/products/benzene.jpeg',    
  'SOL-C10-017': '/images/products/benzene.jpeg',    
  'ARO-TOL-019': '/images/products/benzene.jpeg',    
  'ARO-CBZ-020': '/images/products/benzene.jpeg'     
};

for (const [code, img] of Object.entries(imageMap)) {
  const regex = new RegExp(`(code:\\s*['"\`]${code}['"\`],\\n\\s*name:[^\\n]+,\\n\\s*category:[^\\n]+,\\n\\s*shortDesc:[^\\n]+,\\n\\s*description:[^\\n]+,)`, 'g');
  // Check if it already has an image line right after description to avoid duplicates
  if (!data.match(new RegExp(`code:\\s*['"\`]${code}['"\`][\\s\\S]*?image:\\s*['"\`]`))) {
     data = data.replace(regex, `$1\n    image: "${img}",`);
  }
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Updated remaining products with placeholder images');
