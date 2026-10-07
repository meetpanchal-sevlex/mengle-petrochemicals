export interface SpecRow {
  srNo: number;
  parameter: string;
  testMethod: string;
  unit: string;
  specification?: string;
  testResult?: string;
  limit?: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'Black Oils' | 'White Oils' | 'Base Oils' | 'Solvents' | 'Aromatic Petrochemicals';
  shortDesc: string;
  description: string;
  image?: string;
  applications: string[];
  specs?: SpecRow[];
  extraSpecsNote?: string;
}

export const COMPANY_INFO = {
  name: "M. Engle Petrochemicals",
  tradeName: "M. Engle Traders",
  tagline: "Powering Industry. Delivering Performance.",
  subtitle: "Industrial Oil & Chemical Solutions",
  description: "M Engle Petroleum is a professionally managed petroleum company focused on the distribution and supply of petroleum products and allied industrial solutions. We are committed to serving businesses with dependable products, consistent supply, and professional service.",
  phone: "+91 82003 91131",
  phoneRaw: "+918200391131",
  whatsappNumber: "918200391131",
  email: "sales@menglepetro.com",
  website: "www.menglepetro.com",
  credentials: [
    { title: "PESO Authorisation", value: "A/P/CB/MP/16/167 (P550509)", subtitle: "Petroleum & Explosives Safety Organisation" },
    { title: "Udyam Registration", value: "UDYAM-MP-23-0058639", subtitle: "Ministry of MSME, Govt of India" },
    { title: "GST Registration", value: "23AAPPE4185R1ZD", subtitle: "Registered & Verified Taxpayer" },
    { title: "Govt. Authorized", value: "Licensed Industrial Supplier", subtitle: "Nationwide Supply Network" }
  ],
  offices: [
    {
      type: "Branch Office (Ahmedabad)",
      city: "Ahmedabad, Gujarat",
      address: "A622, Moneyplant Highstreet, Jagatpur Road, Sarkhej-Gandhinagar Highway, Nr. BSNL Office, Ahmedabad – 382470 (GUJARAT - INDIA)",
      isPrimary: false,
    },
    {
      type: "Registered Office (Indore)",
      city: "Indore, Madhya Pradesh",
      address: "B-102 Samarth Park Behind Dmart Mhow, Indore – 453441 (MADHYA PRADESH - INDIA)",
      isPrimary: true,
    }
  ],
  coreStrengths: [
    { title: "Reliable Sourcing", desc: "Building dependable supply channels to meet urgent and regular customer requirements." },
    { title: "Comprehensive Range", desc: "Serving diverse petroleum, solvent, and allied heavy product requirements from a single point." },
    { title: "Professional Operations", desc: "Structured processes focused on responsible handling, safety compliance, and delivery." },
    { title: "Customer Commitment", desc: "Developing long-term partnerships through transparent commercial terms and service." },
    { title: "Compliance Driven", desc: "Full PESO, GST, and statutory authorisations for risk-free procurement." }
  ]
};

export const PRODUCTS: Product[] = [
  // BLACK OILS
  {
    id: "light-diesel-oil",
    image: "/images/products/ldo_real.jpeg",
    code: "BO-LDO-001",
    name: "Light Diesel Oil (LDO) - BPCL",
    category: "Black Oils",
    shortDesc: "Class C category fuel having flash point above 66°C under BIS 1460:2000 specification.",
    description: "Light Diesel Oil falls under Class C category fuel having flash point above 66°C. It is a blend of distillate components and a small amount of residual components. It is marketed under BIS 1460:2000 specification for Diesel fuels.",
    applications: [
      "Used in lower RPM engines",
      "Lift irrigation pump sets",
      "DG Sets (Diesel Generator Sets)",
      "Fuel in industrial boilers and furnaces"
    ],
    specs: [
      { srNo: 1, parameter: "Ash Content", testMethod: "IS 1448 (P: 4)", unit: "% wt", specification: "Max 0.02", testResult: "0.02" },
      { srNo: 2, parameter: "Copper strip corrosion, 3hrs@100°C", testMethod: "IS 1448 (P: 15)", unit: "-", specification: "Not worse than No 2", testResult: "1a" },
      { srNo: 3, parameter: "Density at 15°C", testMethod: "IS 1448 (P: 16)", unit: "kg/m³", specification: "To be reported", testResult: "898.2" },
      { srNo: 4, parameter: "Density at 15°C", testMethod: "IS 1448 (P: 16)", unit: "g/ml", specification: "To be reported", testResult: "0.8982" },
      { srNo: 5, parameter: "Flash point (PMCC)", testMethod: "IS 1448 (P: 21)", unit: "°C", specification: "Min 66", testResult: "66.0" },
      { srNo: 6, parameter: "Kinematic viscosity @ 40°C", testMethod: "IS 1448 (P: 25)", unit: "cSt", specification: "Max 15.000", testResult: "8.915" },
      { srNo: 7, parameter: "Pour Point", testMethod: "IS 1448 (P: 10)", unit: "°C", specification: "Max 21", testResult: "1" },
      { srNo: 8, parameter: "Ramsbottom Carbon Residue", testMethod: "IS 1448 (P: 8)", unit: "% wt", specification: "Max 1.5", testResult: "1.0" },
      { srNo: 9, parameter: "Sediment by Extraction", testMethod: "IS 1448 (P: 30)", unit: "% wt", specification: "Max 0.1", testResult: "0.04" },
      { srNo: 10, parameter: "Total Acid Number", testMethod: "ASTM D664", unit: "mg KOH/g", specification: "Max 0.5", testResult: "0.4" },
      { srNo: 11, parameter: "Total Sulphur", testMethod: "ASTM D4294", unit: "% wt", specification: "Max 1.5", testResult: "0.8" },
      { srNo: 12, parameter: "Water Content", testMethod: "IS 1448 (P: 40)", unit: "% vol.", specification: "Max 0.25", testResult: "0.2" },
    ]
  },
  {
    id: "furnace-oil",
    image: "/images/products/furnace-oil_real.jpeg",
    code: "BO-FO-002",
    name: "Furnace Oil (FO)",
    category: "Black Oils",
    shortDesc: "Residual fuel meeting Bureau of Indian Standards IS: 1593-1982 for fuel oils, grade MV2.",
    description: "Furnace Oil is a fraction obtained from petroleum distillation. It is a dark, viscous residual liquid liquid at room temperature with carbon atoms ranging from 20 to 55. Meets Bureau of Indian Standards Specification IS: 1593-1982 for fuel oils, grade MV2.",
    applications: [
      "Heavy industrial furnaces and boilers",
      "Power generation plants",
      "Glass and ceramic heating units",
      "Metallurgical and rolling mills"
    ],
    specs: [
      { srNo: 1, parameter: "Density at 15°C", testMethod: "IS 1448 [11:16]", unit: "g/ml", specification: "To be reported", testResult: "0.9614" },
      { srNo: 2, parameter: "Flash point (PMCC)", testMethod: "IS 1448 [13:21]", unit: "°C", specification: "Min 66", testResult: "77" },
      { srNo: 3, parameter: "Kinematic Viscosity @ 50°C", testMethod: "IS 1448 [P: 25]", unit: "cSt", specification: "125 to 180", testResult: "138" },
      { srNo: 4, parameter: "Total Sulphur", testMethod: "ASTM D4294", unit: "% wt", specification: "Max 4.0", testResult: "2.09" },
      { srNo: 5, parameter: "Pour Point", testMethod: "IS 1448 [P: 10]", unit: "°C", specification: "Max 27", testResult: "12" },
      { srNo: 6, parameter: "Water Content", testMethod: "IS 1448 [P: 40]", unit: "% by mass", specification: "Max 1.0", testResult: "0.30%" },
      { srNo: 7, parameter: "Calorific Value (Gross)", testMethod: "IS 1448 [P: 7]", unit: "Kcal/Kg", specification: "To be reported", testResult: "10253" },
      { srNo: 8, parameter: "Acidity, Inorganic / Ash Content", testMethod: "ASTM D974 / IS 1448", unit: "% wt", specification: "Nil / Max 0.1", testResult: "Nil / 0.010" },
      { srNo: 9, parameter: "Sediment by Extraction", testMethod: "IS 1448 [P: 30]", unit: "% wt", specification: "Max 0.25", testResult: "0.03" },
    ]
  },
  {
    id: "fuel-oil",
    image: "/images/products/fuel-oil_real.jpeg",
    code: "BO-FU-003",
    name: "Fuel Oil",
    category: "Black Oils",
    shortDesc: "High calorific value industrial liquid fuel with optimal viscosity and combustion efficiency.",
    description: "Fuel Oil is a residual fuel produced by blending residues from petroleum distillation with middle distillates. Designed for maximum thermal efficiency and high calorific output in industrial combustion units.",
    applications: [
      "Steam generation in boilers",
      "Thermal power units",
      "Industrial kilns and asphalt heating plants",
      "Process heating"
    ],
    specs: [
      { srNo: 1, parameter: "Specific Gravity @ 30°C", testMethod: "SP/TM/003", unit: "g/ml", specification: "0.9 to 0.92", testResult: "0.902" },
      { srNo: 2, parameter: "Flash Point", testMethod: "SP/TM/004", unit: "°C", specification: "50 to 60", testResult: "52.5" },
      { srNo: 3, parameter: "Kinematic Viscosity @ 30°C", testMethod: "SP/TM/005", unit: "CST", specification: "2.5 to 15.7", testResult: "4.960" },
      { srNo: 4, parameter: "Pour Point", testMethod: "SP/TM/006", unit: "°C", specification: "≤ 12", testResult: "1°C" },
      { srNo: 5, parameter: "Ramsbottom Carbon Residue", testMethod: "SP/TM/007", unit: "% wt", specification: "≤ -1.50", testResult: "0.90%" },
      { srNo: 6, parameter: "Ash Content", testMethod: "SP/TM/008", unit: "% wt", specification: "≤ 0.02", testResult: "0.002%" },
      { srNo: 7, parameter: "Total Sulphur", testMethod: "SP/TM/009", unit: "% wt", specification: "≤ 1.8", testResult: "1.49%" },
      { srNo: 8, parameter: "Water Content", testMethod: "SP/TM/010", unit: "% vol", specification: "≤ 0.25", testResult: "0%" },
      { srNo: 9, parameter: "Calorific Value", testMethod: "SP/TM/011", unit: "Kcal/kg", specification: "9000 to 10500", testResult: "9600" },
    ]
  },
  {
    id: "lshs",
    image: "/images/products/lshs_real.jpeg",
    code: "BO-LSHS-004",
    name: "Low Sulphur Heavy Stock (LSHS)",
    category: "Black Oils",
    shortDesc: "Eco-friendly low-sulphur residual fuel with high pour point and minimal emissions.",
    description: "Low Sulphur Heavy Stock (LSHS) is a residual fuel manufactured from select indigenous crude oils. It is characterized by low sulphur content (typically <0.5%) to meet environmental emission standards in sensitive industrial areas.",
    applications: [
      "Pollution-sensitive industrial boiler zones",
      "Fertilizer and chemical processing plants",
      "Steel re-rolling and metallurgical furnaces",
      "Power utility generation"
    ],
    specs: [
      { srNo: 1, parameter: "Kinematic Viscosity @ 50°C", testMethod: "ISO 3104", unit: "cSt", specification: "Max 380 (RMG 380) / Max 180 (RMG 180)", testResult: "Complies" },
      { srNo: 2, parameter: "Density at 15°C", testMethod: "ISO 3675 / 12185", unit: "Kg/m³", specification: "Max 991.0", testResult: "Complies" },
      { srNo: 3, parameter: "Sulphur Content", testMethod: "ISO 8754 / ASTM D4294", unit: "% mass", specification: "Max 0.5%", testResult: "< 0.45%" },
      { srNo: 4, parameter: "Flash Point", testMethod: "ISO 2719", unit: "°C", specification: "Min 66.0", testResult: "> 70" },
      { srNo: 5, parameter: "Pour Point", testMethod: "ISO 3016", unit: "°C", specification: "Max 30.0", testResult: "28" },
      { srNo: 6, parameter: "Water Content", testMethod: "ISO 3733", unit: "% vol", specification: "Max 0.50", testResult: "0.20%" },
      { srNo: 7, parameter: "Ash Content", testMethod: "ISO 6245", unit: "% mass", specification: "Max 0.1", testResult: "0.04%" },
    ]
  },
  {
    id: "pyrolysis-oil",
    image: "/images/products/pyrolysis.jpeg",
    code: "BO-PO-005",
    name: "Pyrolysis Oil",
    category: "Black Oils",
    shortDesc: "Synthetic bio/tire fuel substitute for industrial thermal heating and boiler operations.",
    description: "Pyrolysis oil (often referred to as bio-crude or tire-derived fuel) is obtained by heating dry biomass or polymer feedstocks in the absence of oxygen at ~500°C. It serves as a cost-effective, high-calorific alternative to furnace oil.",
    applications: [
      "Industrial heating boilers",
      "Cement and lime kilns",
      "Bitumen mixing and hot-mix asphalt plants",
      "Foundries and ceramic units"
    ],
    specs: [
      { srNo: 1, parameter: "Density @ 15°C", testMethod: "ASTM D-4052-15", unit: "g/cc", specification: "To be reported", testResult: "0.9223" },
      { srNo: 2, parameter: "Sulphur (S)", testMethod: "ASTM D-4294-16", unit: "% wt", specification: "To be reported", testResult: "0.90" },
      { srNo: 3, parameter: "Gross Calorific Value", testMethod: "ASTM D-4809-13", unit: "kcal/kg", specification: "Min 9500", testResult: "10341" },
      { srNo: 4, parameter: "Conradson Carbon Residue", testMethod: "ASTM D-189-14", unit: "% wt", specification: "To be reported", testResult: "0.45" },
      { srNo: 5, parameter: "Kinematic Viscosity @ 40°C", testMethod: "ASTM D-445-15", unit: "cSt", specification: "To be reported", testResult: "4.597" },
      { srNo: 6, parameter: "Water Content", testMethod: "ASTM D-95-13 e1", unit: "% vol", specification: "Max 1.0", testResult: "0.20" },
    ]
  },
  {
    id: "recycled-base-oil",
    image: "/images/products/recycled.jpeg",
    code: "BO-RO-006",
    name: "Recycled Base Oil",
    category: "Black Oils",
    shortDesc: "Re-refined high-viscosity-index base stock for circular economy and cost optimization.",
    description: "Used oil re-refined and de-mineralised into high quality base stock. Thoroughly processed to eliminate contaminants while retaining superior lubricating qualities and film strength.",
    applications: [
      "Industrial burner fuel formulation",
      "Mould release agent for concrete and metal pressing",
      "Hydraulic fluid blending",
      "Bitumen additives and industrial lubricants"
    ],
    specs: [
      { srNo: 1, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Bright & Clear", testResult: "Bright & Clear" },
      { srNo: 2, parameter: "Colour", testMethod: "ASTM D1500", unit: "-", specification: "To be reported", testResult: "L 2.5" },
      { srNo: 3, parameter: "Density 29.5°C", testMethod: "ASTM D4052", unit: "g/ml", specification: "To be reported", testResult: "0.836" },
      { srNo: 4, parameter: "Kinematic Viscosity 40°C", testMethod: "ASTM D445", unit: "cSt", specification: "To be reported", testResult: "22.79" },
      { srNo: 5, parameter: "Kinematic Viscosity 100°C", testMethod: "ASTM D445", unit: "cSt", specification: "To be reported", testResult: "4.316" },
      { srNo: 6, parameter: "Viscosity Index", testMethod: "ASTM D2270", unit: "-", specification: "Min 85", testResult: "91.546" },
      { srNo: 7, parameter: "Total Acid Number", testMethod: "ASTM D664", unit: "mg KOH/g", specification: "To be reported", testResult: "0.178" },
      { srNo: 8, parameter: "Flash Point", testMethod: "ASTM D92", unit: "°C", specification: "Min 160", testResult: "180" },
    ]
  },

  // WHITE OILS
  {
    id: "light-liquid-paraffin",
    image: "/images/products/llp.jpeg",
    code: "WO-LLP-001",
    name: "Light Liquid Paraffin Oil (LLP) - IP Grade",
    category: "White Oils",
    shortDesc: "Highly purified saturated hydrocarbons, transparent, colourless, odourless, IP grade.",
    description: "Light Liquid Paraffin Oil IP is a highly purified mixture of liquid saturated hydrocarbons obtained from petroleum. Transparent, colourless, odourless, and tasteless when cold. Demonstrates outstanding thermal and chemical stability with high flash points.",
    applications: [
      "Textile Auxiliaries: Anti-static coning oil & knitting oil",
      "Cosmetics & Pharmaceuticals: Creams, lotions, bulk drug carrier",
      "Food Grade Plastics & Specialty Lubricants",
      "Agrochemicals, plant spray oils & aerosol propellants",
      "Perfumery, Incenses & Attars"
    ],
    specs: [
      { srNo: 1, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Bright & Clear", testResult: "Bright & Clear" },
      { srNo: 2, parameter: "Density 29.5°C", testMethod: "ASTM D1298", unit: "g/ml", specification: "To Report", testResult: "To Report" },
      { srNo: 3, parameter: "Kinematic Viscosity 40°C", testMethod: "ASTM D445", unit: "cSt", specification: "10 to 15", testResult: "10.82" },
      { srNo: 4, parameter: "Flash Point", testMethod: "ASTM D97", unit: "°C", specification: "Min 140", testResult: "156" },
      { srNo: 5, parameter: "Pour point", testMethod: "ASTM D92", unit: "°C", specification: "Max -9", testResult: "-15" },
      { srNo: 6, parameter: "Colour", testMethod: "ASTM D1500", unit: "-", specification: "< 0.5", testResult: "< 0.5" },
    ]
  },
  {
    id: "quenching-oil",
    image: "/images/products/quenching.jpeg",
    code: "SO-QO-002",
    name: "Quenching Oil",
    category: "White Oils",
    shortDesc: "Formulated industrial heat-treatment fluid for controlled metal cooling and uniform hardness.",
    description: "M. Engle Quenching Oil is specially formulated for controlled cooling of heated metal components during the heat treatment process. Ensures uniform hardness, reduced distortion, low foaming, and long fluid service life.",
    applications: [
      "Gears & gear components",
      "Bearings, shafts & axles",
      "Automotive fasteners and machine parts",
      "Tool & die components and forging units"
    ],
    specs: [
      { srNo: 1, parameter: "Controlled Cooling Rate", testMethod: "Laboratory", unit: "-", specification: "Standardized", testResult: "Consistent" },
      { srNo: 2, parameter: "Thermal Stability", testMethod: "ASTM Cycle", unit: "-", specification: "High", testResult: "High Resistance" },
      { srNo: 3, parameter: "Foaming Characteristic", testMethod: "ASTM D892", unit: "-", specification: "Low Foam", testResult: "Nil" },
      { srNo: 4, parameter: "Oxidation Stability", testMethod: "ASTM D943", unit: "-", specification: "Extended Life", testResult: "Pass" },
    ]
  },

  // BASE OILS
  {
    id: "base-oil-range",
    image: "/images/products/base-oil.jpeg",
    code: "BA-OI-1512",
    name: "Base Oil (SN-150, SN-500, N-150, N-500, LUB-32, LUB-100)",
    category: "Base Oils",
    shortDesc: "Virgin and Hydrotreated Group I & II Base Oils for lubricant blending and industrial oils.",
    description: "High-grade solvent-refined and hydrotreated virgin mineral base stocks. Provides exceptional oxidation stability, high viscosity index, low volatility, and excellent additive receptivity for blending automotive and industrial oils.",
    applications: [
      "Automotive engine and gear oil blending",
      "Industrial hydraulic fluid manufacturing",
      "Transformer and turbine oils",
      "Grease and specialty lubricant manufacturing"
    ],
    specs: [
      { srNo: 1, parameter: "Kinematic Viscosity @ 40°C", testMethod: "ASTM D 445", unit: "cSt", specification: "Grade Dependent (8.5 - 100)", testResult: "SN-150: 32 | SN-500: 100" },
      { srNo: 2, parameter: "Viscosity Index (VI)", testMethod: "ASTM D 2270", unit: "-", specification: "Min 90 to 105", testResult: "95 - 105" },
      { srNo: 3, parameter: "Flash Point", testMethod: "ASTM D 92", unit: "°C", specification: "Min 156 to 248", testResult: "210 - 248" },
      { srNo: 4, parameter: "Pour Point", testMethod: "ASTM D 97", unit: "°C", specification: "Max -6 to -18", testResult: "-12 to -18" },
      { srNo: 5, parameter: "Colour Saybolt", testMethod: "ASTM D 156", unit: "-", specification: "+30", testResult: "+30" },
    ]
  },

  // PETROLEUM & HYDROCARBON SOLVENTS
  {
    id: "mineral-turpentine-oil",
    image: "/images/products/mto.jpeg",
    code: "SOL-MTO-001",
    name: "Mineral Turpentine Oil (MTO) / White Spirit",
    category: "Solvents",
    shortDesc: "Open-chain aliphatic hydrocarbon C7 to C12 solvent widely utilized in paints and varnishes.",
    description: "Mineral Turpentine Oil (MTO), also recognized as White Spirit & Petroleum Spirits, is a mixture of aliphatic and alicyclic C7-C12 hydrocarbons. Insoluble in water with consistent boiling characteristics.",
    applications: [
      "Raw material for paints, enamels & varnishes",
      "Extraction, degreasing & industrial cleaning solvent",
      "Solvent in aerosols, lacquers and asphalt products",
      "Dry cleaning and precision parts washing"
    ],
    specs: [
      { srNo: 1, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Clear and Bright", testResult: "Clear and Bright" },
      { srNo: 2, parameter: "Colour (Saybolt)", testMethod: "IS 1448 P:14", unit: "-", specification: "Min 21", testResult: "30" },
      { srNo: 3, parameter: "Density at 15°C", testMethod: "IS 1448 P:16", unit: "g/mL", specification: "To Report", testResult: "0.7892" },
      { srNo: 4, parameter: "Copper Strip Corrosion (3h @ 50°C)", testMethod: "IS 1448 P:15", unit: "-", specification: "Not worse than No 1", testResult: "1B" },
      { srNo: 5, parameter: "Distillation: Initial Boiling Point", testMethod: "IS 1448 P:18", unit: "°C", specification: "Min 125.0", testResult: "147" },
      { srNo: 6, parameter: "Distillation: Final Boiling Point", testMethod: "IS 1448 P:18", unit: "°C", specification: "Max 240.0", testResult: "206.4" },
      { srNo: 7, parameter: "Flash Point (Abel)", testMethod: "IS 1448 P:20", unit: "°C", specification: "Min 30.0", testResult: "35.5" },
      { srNo: 8, parameter: "Residue on Evaporation", testMethod: "IS 1448 P:29", unit: "mg/100ml", specification: "Max 5.0", testResult: "2" },
      { srNo: 9, parameter: "Aromatic Content", testMethod: "IS 1448 P:23", unit: "% v/v", specification: "Max 40.0", testResult: "23.3" },
    ]
  },
  {
    id: "naphtha",
    image: "/images/products/naphtha.jpeg",
    code: "SOL-NAP-002",
    name: "Naphtha",
    category: "Solvents",
    shortDesc: "Volatile hydrocarbon solvent and petrochemical feedstock for olefins and polymers.",
    description: "Naphtha is a flammable liquid hydrocarbon mixture derived from natural gas condensates and petroleum distillates. Essential as an industrial solvent and crucial primary feedstock for petrochemical crackers.",
    applications: [
      "Raw material for polymer production (polyethylene, polypropylene)",
      "Steam cracking for gasoline and aromatics generation",
      "Industrial high-volatility solvent",
      "Industrial fuel for specialized burners"
    ],
    specs: [
      { srNo: 1, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Clear & Bright", testResult: "Clear & Bright" },
      { srNo: 2, parameter: "Density @ 15°C", testMethod: "IS 1448 P:16", unit: "g/mL", specification: "To Report", testResult: "0.7892" },
      { srNo: 3, parameter: "Initial Boiling Point", testMethod: "IS 1448 P:18", unit: "°C", specification: "Min 125.0", testResult: "147" },
      { srNo: 4, parameter: "Final Boiling Point", testMethod: "IS 1448 P:18", unit: "°C", specification: "Max 240.0", testResult: "206.4" },
      { srNo: 5, parameter: "Flash Point (Abel)", testMethod: "IS 1448 P:20", unit: "°C", specification: "Min 30.0", testResult: "35.5" },
    ]
  },
  {
    id: "c9-solvent",
    image: "/images/products/c9.jpeg",
    code: "SOL-C9-003",
    name: "C9 Solvent",
    category: "Solvents",
    shortDesc: "Aromatic C9 hydrocarbon solvent with excellent solvency for paints, inks, and agrochemicals.",
    description: "High-solvency C9 aromatic cut designed for coatings, resins, agrochemicals, and industrial cleaners requiring controlled evaporation and superior active ingredient solvency.",
    applications: [
      "Paints, industrial coatings & lacquers",
      "Printing inks, offset reducers & gravure formulations",
      "Agrochemical emulsifiable concentrates (EC)",
      "Foundry chemicals, water treatment & wash oils"
    ],
    specs: [
      { srNo: 1, parameter: "Specific gravity @ 15.6°C", testMethod: "ASTM D4052", unit: "-", specification: "0.90 - 0.95", testResult: "0.912" },
      { srNo: 2, parameter: "Flash point (PMCC)", testMethod: "ASTM D93", unit: "°C", specification: "32 - 66", testResult: "55" },
      { srNo: 3, parameter: "Distillation range (IBP)", testMethod: "ASTM D86", unit: "°C", specification: "150 Min", testResult: "160" },
      { srNo: 4, parameter: "Distillation (FBP)", testMethod: "ASTM D86", unit: "°C", specification: "270 Max", testResult: "238" },
      { srNo: 5, parameter: "Sulphur Content", testMethod: "ASTM D5453", unit: "wt ppm", specification: "To Report", testResult: "0.942" },
    ]
  },
  {
    id: "c9-plus-solvent",
    image: "/images/products/c9-plus.jpeg",
    code: "SOL-C9P-004",
    name: "C9 Plus Solvent (White)",
    category: "Solvents",
    shortDesc: "High aromatic content (99%) C9+ solvent engineered for specialty performance applications.",
    description: "High-purity C9+ solvent featuring 99% aromatic content. Engineered for applications where low color, uniform evaporation, and high resin compatibility are critical.",
    applications: [
      "Specialty industrial coatings and synthetic resins",
      "Printing inks and tinting systems",
      "Pesticide and emulsifiable concentrates",
      "Oilfield chemicals and surfactants"
    ],
    specs: [
      { srNo: 1, parameter: "Specific gravity @ 30°C", testMethod: "ASTM D4052", unit: "-", specification: "0.86 - 0.88", testResult: "0.865" },
      { srNo: 2, parameter: "Initial Boiling Point (IBP)", testMethod: "ASTM D86", unit: "°C", specification: "190.0 Min", testResult: "183" },
      { srNo: 3, parameter: "Flash Point", testMethod: "ASTM D86", unit: "°C", specification: "Min 38", testResult: "38" },
      { srNo: 4, parameter: "Mixed Aniline Point", testMethod: "ASTM D611", unit: "°C", specification: "13", testResult: "37" },
      { srNo: 5, parameter: "Aromatic Content", testMethod: "007(GC)", unit: "Wt%", specification: "Min 99", testResult: "99" },
      { srNo: 6, parameter: "Appearance / Colour", testMethod: "Visual / APHA", unit: "-", specification: "Clear", testResult: "25 APHA" },
    ]
  },
  {
    id: "c10-solvent",
    image: "/images/products/c10.jpeg",
    code: "SOL-C10-005",
    name: "C10 Solvent",
    category: "Solvents",
    shortDesc: "High boiling point (181-205°C) aromatic solvent with zero ethyl-benzene for green agrochemicals.",
    description: "C10 solvent is a high boiling point (181-205°C) aromatic hydrocarbon solvent. It possesses a flash point and evaporation rate higher than Xylene, imparting superior flow and film formation in coatings, with no ethyl-benzene content.",
    applications: [
      "Environmentally friendly agrochemicals & pesticide formulations",
      "High-build automotive & industrial paints",
      "Resin blend stock for foundries",
      "Down-hole oilfield process additive fluids"
    ],
    specs: [
      { srNo: 1, parameter: "Specific gravity @ 15.6°C", testMethod: "ASTM D4052", unit: "g/cm³", specification: "0.86 - 0.88", testResult: "0.892" },
      { srNo: 2, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Water White", testResult: "Water White" },
      { srNo: 3, parameter: "Distillation IBP", testMethod: "ASTM D86", unit: "°C", specification: "150 Min", testResult: "162" },
      { srNo: 4, parameter: "Distillation FBP", testMethod: "ASTM D86", unit: "°C", specification: "270 Max", testResult: "204" },
      { srNo: 5, parameter: "Mixed Aniline Point", testMethod: "ASTM D611", unit: "°C", specification: "16 Max", testResult: "12.6" },
      { srNo: 6, parameter: "Total Aromatics", testMethod: "G.C", unit: "%", specification: "98.5% Min", testResult: "99.1%" },
    ]
  },

  // AROMATIC PETROCHEMICALS
  {
    id: "benzene",
    image: "/images/products/benzene-pure.jpeg",
    code: "AR-BEN-001",
    name: "Benzene (C6H6)",
    category: "Aromatic Petrochemicals",
    shortDesc: "High-purity primary aromatic building block for chemical synthesis and polymer manufacture.",
    description: "Pure benzene (C6H6) is the fundamental parent compound of aromatic hydrocarbons. Essential basic petrochemical feedstock utilized globally for polystyrene, alkylbenzenes, synthetic fibers, and detergents.",
    applications: [
      "Styrene and polystyrene production",
      "Cumene (for phenol & acetone) manufacturing",
      "Cyclohexane (nylon precursors)",
      "Linear alkylbenzene (LAB) for detergents"
    ],
    specs: [
      { srNo: 1, parameter: "Chemical Formula", testMethod: "Standard", unit: "-", specification: "C6H6", testResult: "C6H6" },
      { srNo: 2, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Clear, Colourless Liquid", testResult: "Pass" },
      { srNo: 3, parameter: "Purity", testMethod: "GC", unit: "%", specification: "Min 99.8%", testResult: "99.9%" },
      { srNo: 4, parameter: "Packaging", testMethod: "Standard", unit: "-", specification: "Bulk Tankers / ISO Tanks", testResult: "Bulk Supply" }
    ]
  },
  {
    id: "toluene",
    image: "/images/products/toluene.jpeg",
    code: "AR-TOL-002",
    name: "Toluene / Toluol (Methylbenzene)",
    category: "Aromatic Petrochemicals",
    shortDesc: "Aromatic methylbenzene solvent for paints, chemical synthesis, and octane enhancement.",
    description: "Toluene (C7H8) is an aromatic hydrocarbon widely used as an industrial solvent and chemical intermediate for diisocyanates (polyurethane foam), benzoic acid, and high-performance fuel blending.",
    applications: [
      "Feedstock for TDI (toluene diisocyanate) polyurethane foam",
      "Solvent in paints, printing inks, thinners & adhesives",
      "Intermediate for benzoic acid and benzaldehyde",
      "High-octane fuel component for racing and aviation blends"
    ],
    specs: [
      { srNo: 1, parameter: "Purity (Methylbenzene)", testMethod: "GC", unit: "%", specification: "Min 99.5%", testResult: "99.7%" },
      { srNo: 2, parameter: "Appearance", testMethod: "Visual", unit: "-", specification: "Clear & Colourless", testResult: "Pass" },
      { srNo: 3, parameter: "Boiling Range", testMethod: "ASTM D86", unit: "°C", specification: "110.6 ± 1", testResult: "110.5" },
    ]
  },
  {
    id: "crude-benzol",
    image: "/images/products/benzene.jpeg",
    code: "AR-CBZ-003",
    name: "Crude Benzol",
    category: "Aromatic Petrochemicals",
    shortDesc: "Coal carbonisation recovered aromatic mixture consisting of benzene, toluene, and xylenes.",
    description: "Crude benzol is recovered during the high-temperature carbonisation of coking coal in coke ovens. Composed primarily of benzene homologues (benzene, toluene, xylene) for secondary distillation and industrial recovery.",
    applications: [
      "Aromatic chemical fractionation and recovery",
      "Industrial solvent blends",
      "Industrial fuel blending"
    ],
    specs: [
      { srNo: 1, parameter: "Specific Gravity @ 15.56°C", testMethod: "ASTM D7504", unit: "g/ml", specification: "0.85 - 0.88", testResult: "0.871" },
      { srNo: 2, parameter: "Benzene Fraction", testMethod: "GC", unit: "%", specification: "0.75 - 0.85 (75-85%)", testResult: "78.2%" },
      { srNo: 3, parameter: "Toluene Fraction", testMethod: "GC", unit: "%", specification: "0.10 - 0.12 (10-12%)", testResult: "11.4%" },
      { srNo: 4, parameter: "Total Xylene", testMethod: "GC", unit: "%", specification: "0.03 - 0.05", testResult: "4.1%" },
      { srNo: 5, parameter: "Sulphur Content", testMethod: "ASTM D4629", unit: "mg/kg", specification: "5000 Max", testResult: "3200" },
      { srNo: 6, parameter: "Nitrogen Content", testMethod: "ASTM D4629", unit: "mg/kg", specification: "2000 Max", testResult: "1200" },
    ]
  }
];
