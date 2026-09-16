const fs = require('fs');
let text = fs.readFileSync('src/data/mockData.ts', 'utf8');

text = text.replace(/Agriculture A\uFFFD Supply Chain/g, 'Agriculture & Supply Chain');
text = text.replace(/FinTech A\uFFFD AI Trading/g, 'FinTech & AI Trading');
text = text.replace(/Healthcare A\uFFFD Telemedicine/g, 'Healthcare & Telemedicine');
text = text.replace(/Luxury Brand A\uFFFD E-Commerce/g, 'Luxury Brand & E-Commerce');

// Also catch variations just in case
text = text.replace(/Agriculture A.*Supply Chain/g, 'Agriculture & Supply Chain');
text = text.replace(/FinTech A.*AI Trading/g, 'FinTech & AI Trading');
text = text.replace(/Healthcare A.*Telemedicine/g, 'Healthcare & Telemedicine');
text = text.replace(/Luxury Brand A.*E-Commerce/g, 'Luxury Brand & E-Commerce');

fs.writeFileSync('src/data/mockData.ts', text, 'utf8');
