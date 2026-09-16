const fs = require('fs');
let code = fs.readFileSync('src/components/StudioTeam.tsx', 'utf8');
code = code.replace(/text-\[var\(--text-muted-dark\)\]/g, 'text-white/80 font-medium');
fs.writeFileSync('src/components/StudioTeam.tsx', code);
console.log('Fixed StudioTeam contrast.');
