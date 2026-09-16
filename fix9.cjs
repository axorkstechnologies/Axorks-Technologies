const fs = require('fs');
let code = fs.readFileSync('src/components/DiscoveryPortal.tsx', 'utf8');
code = code.replace(/const calLink = import\.meta\.env\.VITE_CAL_LINK \|\| "https:\/\/cal\.com\/axorks-discovery";/, 'const calLink = "https://cal.com/axorks-discovery";');
fs.writeFileSync('src/components/DiscoveryPortal.tsx', code);
