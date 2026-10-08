const fs = require('fs');
let data = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

data = data.replace('const [isLoadingPrices, setIsLoadingPrices] = useState(true);', 'const [isLoadingPrices, setIsLoadingPrices] = useState(true);\n  const [currentMonth, setCurrentMonth] = useState("");');

data = data.replace('// Fetch prices from Google Sheet CSV', 'useEffect(() => {\n    setCurrentMonth(new Date().toLocaleString("default", { month: "short", year: "numeric" }));\n  }, []);\n\n  // Fetch prices from Google Sheet CSV');

data = data.replace("{new Date().toLocaleString('default', { month: 'short', year: 'numeric' })}", '{currentMonth || "Latest"}');

fs.writeFileSync('src/app/price-list/page.tsx', data);
console.log('Fixed hydration error!');
