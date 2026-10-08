const fs = require('fs');

let data = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Use regex to match the top utility bar. It's a div with bg-[#0B1120] right inside the header, before the main max-w-7xl div.
// Let's find the header tag and the next max-w-7xl div which is the main navbar.
const headerStart = data.indexOf('<header');
if (headerStart !== -1) {
  // We can just use a regex to strip out the Top Utility Bar div.
  // It looks like: <div className="bg-[#0B1120] ... </div> </div> </div> </div>
  // Actually, easiest way is to match from '{/* ' and 'Top Utility Bar' to '{/* ' and 'Main Navbar'.
  let regex = /\{\/\*.*?Top Utility Bar.*?[*\/\}]+[\s\S]*?\{\/\*.*?Main Navbar.*?[*\/\}]+/i;
  data = data.replace(regex, '{/* Main Navbar */}');
  
  fs.writeFileSync('src/components/Navbar.tsx', data);
  console.log('Removed Top Utility Bar via regex matching.');
}
