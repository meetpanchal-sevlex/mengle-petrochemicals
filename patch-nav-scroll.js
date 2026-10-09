const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Import usePathname
if (!nav.includes('usePathname')) {
  nav = nav.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
}

// Inside Navbar, add usePathname and useEffect to scroll to top on route change
if (!nav.includes('const pathname = usePathname();')) {
  nav = nav.replace(
    /const \[scrolled, setScrolled\] = useState\(false\);/,
    `const [scrolled, setScrolled] = useState(false);\n  const pathname = usePathname();\n\n  // Force scroll to top on route change (fixes mobile drawer scroll retention bug)\n  useEffect(() => {\n    if (!window.location.hash) {\n      window.scrollTo(0, 0);\n    }\n  }, [pathname]);`
  );
}

fs.writeFileSync('src/components/Navbar.tsx', nav);
console.log('Injected scroll-to-top on route change into Navbar.');
