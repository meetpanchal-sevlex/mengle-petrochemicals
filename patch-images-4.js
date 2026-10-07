const fs = require('fs');
let data = fs.readFileSync('src/data/companyData.ts', 'utf8');

// For Fuel Oil
if (!data.match(/id: "fuel-oil",[\s\S]*?image: "/)) {
  data = data.replace(
    'description: "Fuel Oil is a residual fuel produced by blending residues from petroleum distillation with middle distillates. Designed for maximum thermal efficiency and high calorific output in industrial combustion units.",',
    'description: "Fuel Oil is a residual fuel produced by blending residues from petroleum distillation with middle distillates. Designed for maximum thermal efficiency and high calorific output in industrial combustion units.",\n    image: "/images/products/fuel-oil.jpeg",'
  );
}

// For C9 Plus
if (!data.match(/id: "c9-plus",[\s\S]*?image: "/) && !data.match(/id: "c9-plus-solvent",[\s\S]*?image: "/)) {
  data = data.replace(
    'description: "C9 Plus (White) is an advanced petroleum solvent characterized by exceptionally high aromatics (99%) and minimal moisture. Specially refined for industries requiring aggressive solvency and controlled evaporation.",',
    'description: "C9 Plus (White) is an advanced petroleum solvent characterized by exceptionally high aromatics (99%) and minimal moisture. Specially refined for industries requiring aggressive solvency and controlled evaporation.",\n    image: "/images/products/mto.jpeg",'
  );
}

// Check C10 Solvent just in case
if (!data.match(/id: "c10-solvent",[\s\S]*?image: "/)) {
  data = data.replace(
    'description: "C10 Solvent is a heavy aromatic petroleum solvent distinguished by its high flash point and slow evaporation rate. Provides excellent solvency for resins and heavy-duty coatings.",',
    'description: "C10 Solvent is a heavy aromatic petroleum solvent distinguished by its high flash point and slow evaporation rate. Provides excellent solvency for resins and heavy-duty coatings.",\n    image: "/images/products/benzene.jpeg",'
  );
}

fs.writeFileSync('src/data/companyData.ts', data);
console.log('Fixed missing images');
