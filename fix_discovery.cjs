const fs = require('fs');
let code = fs.readFileSync('src/components/DiscoveryPortal.tsx', 'utf8');

// Replace lucide-react import
code = code.replace(/import \{ X \} from 'lucide-react';/g, '');
// Replace <X /> with SVG
code = code.replace(/<X className="w-5 h-5" \/>/g, '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>');

fs.writeFileSync('src/components/DiscoveryPortal.tsx', code);
console.log('DiscoveryPortal updated.');
