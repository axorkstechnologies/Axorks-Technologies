const fs = require('fs');
let footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');

footerCode = footerCode.replace(
  /w-10 h-10 rounded-lg overflow-hidden border border-white\/15 bg-\[#0F172A\] shadow-sm flex items-center justify-center shrink-0 p-1\.5/,
  'w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] overflow-hidden border border-white/15 bg-[#0F172A] shadow-sm flex items-center justify-center shrink-0 p-[5px]'
);

fs.writeFileSync('src/components/Footer.tsx', footerCode);
console.log('Footer logo updated to match Header.');
