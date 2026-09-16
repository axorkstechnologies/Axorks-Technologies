const fs = require('fs');
let footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// I need to find the logo div in Footer.tsx and apply the same exact premium style.
footerCode = footerCode.replace(
  /w-9 h-9 rounded-\[10px\] overflow-hidden border border-\[#C9972E\]\/30 bg-\[#0A0F1D\] shadow-sm flex items-center justify-center shrink-0 p-1\.5/,
  'w-10 h-10 rounded-lg overflow-hidden border border-white/15 bg-[#0F172A] shadow-sm flex items-center justify-center shrink-0 p-1.5'
);

fs.writeFileSync('src/components/Footer.tsx', footerCode);
console.log('Footer logo updated to match Header.');
