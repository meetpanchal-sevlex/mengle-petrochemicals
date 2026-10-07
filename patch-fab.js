const fs = require('fs');
let data = fs.readFileSync('src/components/FloatingActions.tsx', 'utf8');

data = data.replace('pl-4 pr-5 py-3 rounded-full', 'w-12 h-12 sm:w-auto sm:h-auto sm:pl-4 sm:pr-5 sm:py-3 justify-center rounded-full');
data = data.replace('<span className="text-sm font-bold tracking-tight">Quick WhatsApp Quote</span>', '<span className="hidden sm:inline text-sm font-bold tracking-tight">Quick WhatsApp Quote</span>');
data = data.replace('<span className="relative flex h-3 w-3">', '<span className="hidden sm:flex relative h-3 w-3">');

// For the Phone button, make it match the new whatsapp size
data = data.replace('w-12 h-12 rounded-full', 'w-12 h-12 rounded-full');

fs.writeFileSync('src/components/FloatingActions.tsx', data);
console.log('Fixed FloatingActions');
