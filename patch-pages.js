const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

// Helper to extract a section block
function extractSection(id) {
    const startStr = `<section id="${id}"`;
    const start = pageData.indexOf(startStr);
    if (start === -1) return null;
    
    // We'll search for the next <section or the end of the <main> block
    let end = pageData.indexOf('<section', start + 1);
    if (end === -1) {
        end = pageData.indexOf('</main>', start);
    }
    
    if (start !== -1 && end !== -1) {
        return pageData.substring(start, end);
    }
    return null;
}

const aboutSection = extractSection('about');
const credentialsSection = extractSection('credentials');
const contactSection = extractSection('contact');

// Generate page wrapper
function generatePage(title, content) {
    return `'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { Award, CheckCircle2, ShieldCheck, Flame, Truck, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ${title}Page() {
  return (
    <main className="min-h-screen pt-20 bg-slate-50">
      ${content}
    </main>
  );
}
`;
}

if (aboutSection) fs.writeFileSync('src/app/about/page.tsx', generatePage('About', aboutSection));
if (credentialsSection) fs.writeFileSync('src/app/compliance/page.tsx', generatePage('Compliance', credentialsSection));
if (contactSection) fs.writeFileSync('src/app/contact/page.tsx', generatePage('Contact', contactSection));

console.log('Created individual pages');

// Clean up page.tsx
if (aboutSection) pageData = pageData.replace(aboutSection, '');
if (credentialsSection) pageData = pageData.replace(credentialsSection, '');
if (contactSection) pageData = pageData.replace(contactSection, '');

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Cleaned up page.tsx');

// Clean up Navbar.tsx
let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navData = navData.replace(/href="\#about"/g, 'href="/about"');
navData = navData.replace(/href="\#credentials"/g, 'href="/compliance"');
navData = navData.replace(/href="\#contact"/g, 'href="/contact"');

// Update the mobile links array
navData = navData.replace(
    "['/', '#about', '#credentials', '#contact']",
    "['/', '/about', '/compliance', '/contact']"
);
fs.writeFileSync('src/components/Navbar.tsx', navData);

// Clean up Footer.tsx
let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footerData = footerData.replace(/href="\#about"/g, 'href="/about"');
footerData = footerData.replace(/href="\#credentials"/g, 'href="/compliance"');
footerData = footerData.replace(/href="\#contact"/g, 'href="/contact"');
fs.writeFileSync('src/components/Footer.tsx', footerData);

console.log('Updated navigation links');
