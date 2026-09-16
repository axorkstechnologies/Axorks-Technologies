const fs = require('fs');
let code = fs.readFileSync('src/components/CapabilitiesMatrix.tsx', 'utf8');
code = code.replace(/text-\[var\(--text-muted-dark\)\]/g, 'text-[var(--text-secondary)]');
fs.writeFileSync('src/components/CapabilitiesMatrix.tsx', code);
console.log('Fixed contrast in CapabilitiesMatrix.tsx');
