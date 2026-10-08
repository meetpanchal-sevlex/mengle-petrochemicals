const fs = require('fs');

let data = fs.readFileSync('src/app/compliance/page.tsx', 'utf8');

// Center the header
data = data.replace(
  '<div className="max-w-3xl mb-8">',
  '<div className="max-w-3xl mb-8 mx-auto text-center">'
);

// We might want to center the content of the cards too? 
// The user said "this looks kidn of left side inverted man". The text inside the cards is also left-aligned.
// Let's center the text inside the cards too for a more balanced "badge" look.
// In the cards:
// <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4"> -> add mx-auto
data = data.replace(/mb-4">/g, 'mb-4 mx-auto">');
data = data.replace(/<div className="snap-start shrink-0 w-\[85vw\] sm:w-auto bg-white rounded-2xl p-5 border/g, '<div className="snap-start shrink-0 w-[85vw] sm:w-auto bg-white rounded-2xl p-5 border text-center');

fs.writeFileSync('src/app/compliance/page.tsx', data);
console.log('Centered compliance content');
