const fs = require('fs');

let data = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

const oldDefaults = `const DEFAULT_BLACK_OILS = [
  { name: 'Light Diesel Oil (LDO)', basic: 97.00, gst: 18, unit: 'LTR' },
  { name: 'Furnace Oil (FO)', basic: 83.00, gst: 18, unit: 'KGS' },
  { name: 'Fuel Oil', basic: 62.00, gst: 18, unit: 'LTR' },
  { name: 'Low Sulphur Heavy Stock (LSHS)', basic: 83.00, gst: 18, unit: 'KGS' },
  { name: 'Pyrolysis Oil', basic: 75.00, gst: 18, unit: 'KGS' },
  { name: 'Recycled Base Oil', basic: 68.00, gst: 18, unit: 'LTR' },
];

const DEFAULT_WHITE_OILS = [
  { name: 'MTO / White Spirit', basic: 118.00, gst: 18, unit: 'LTR' },
  { name: 'Naphtha', basic: 92.00, gst: 18, unit: 'LTR' },
  { name: 'C9 Solvent', basic: 95.00, gst: 18, unit: 'KGS' },
  { name: 'C9 Plus Solvent (White)', basic: 128.00, gst: 18, unit: 'KGS' },
  { name: 'C10 Solvent', basic: 128.00, gst: 18, unit: 'KGS' },
  { name: 'LLP Oil (IP Grade)', basic: 97.00, gst: 18, unit: 'KGS' },
  { name: 'Quenching Oil', basic: 105.00, gst: 18, unit: 'LTR' },
  { name: 'Base Oil (SN-150 / 500)', basic: 110.00, gst: 18, unit: 'LTR' },
  { name: 'Benzene', basic: 115.00, gst: 18, unit: 'KGS' },
  { name: 'Toluene', basic: 102.00, gst: 18, unit: 'KGS' },
  { name: 'Crude Benzol', basic: 88.00, gst: 18, unit: 'KGS' },
];`;

const newDefaults = `const DEFAULT_BLACK_OILS = [
  { name: 'Furnace Oil (FO)', basic: 83.00, gst: 18, unit: 'KGS' },
  { name: 'Light Diesel Oil (LDO)', basic: 97.00, gst: 18, unit: 'LTR' },
  { name: 'Fuel Oil', basic: 62.00, gst: 18, unit: 'LTR' },
  { name: 'Low Sulphur Heavy Stock (LSHS)', basic: 83.00, gst: 18, unit: 'KGS' },
  { name: 'Pyrolysis Oil', basic: 75.00, gst: 18, unit: 'KGS' },
];

const DEFAULT_WHITE_OILS = [
  { name: 'Mineral Turpentine Oil (MTO)', basic: 118.00, gst: 18, unit: 'LTR' },
  { name: 'Naphtha', basic: 92.00, gst: 18, unit: 'LTR' },
  { name: 'C9 Solvent', basic: 95.00, gst: 18, unit: 'KGS' },
  { name: 'C10 Solvent', basic: 128.00, gst: 18, unit: 'KGS' },
  { name: 'LLP Oil (IP Grade)', basic: 97.00, gst: 18, unit: 'KGS' },
];`;

data = data.replace(oldDefaults, newDefaults);

fs.writeFileSync('src/app/price-list/page.tsx', data);
console.log('Reverted to the optimized 10-product price list strategy');
