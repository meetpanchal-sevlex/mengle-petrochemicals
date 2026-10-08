const fs = require('fs');

function fixOnClick(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Replace <button onClick="..."> with <a href="/contact">
  content = content.replace(/<button[^>]*onClick=\{[^}]*\}[^>]*>/g, (match) => {
    return match.replace('<button', '<a href="/contact"').replace(/onClick=\{[^}]*\}/, '');
  });
  content = content.replace(/<\/button>/g, '</a>');
  fs.writeFileSync(file, content);
}

fixOnClick('src/app/contact/page.tsx');
fixOnClick('src/app/about/page.tsx');

console.log('Fixed onClick handlers in server components.');
