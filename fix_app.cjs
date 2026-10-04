const fs = require('fs');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');

// Insert imports
appCode = appCode.replace(
  /import \{ TeamPage \} from '.\/pages\/TeamPage';/,
  `import { TeamPage } from './pages/TeamPage';\nimport { TermsPage } from './pages/TermsPage';\nimport { PrivacyPage } from './pages/PrivacyPage';`
);

// Insert cases
appCode = appCode.replace(
  /case '\/contact':\s*return <ContactPage \/>;/,
  `case '/contact':\n        return <ContactPage />;\n      case '/terms':\n        return <TermsPage />;\n      case '/privacy':\n        return <PrivacyPage />;\n`
);

fs.writeFileSync('src/App.tsx', appCode);
console.log('App.tsx updated with Terms and Privacy pages.');
