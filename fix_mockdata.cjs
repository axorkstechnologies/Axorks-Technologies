const fs = require('fs');
let text = fs.readFileSync('src/data/mockData.ts', 'utf8');

// The file got corrupted with some non-utf8 characters. I will replace it using node directly
let lines = text.split('\n');
lines = lines.map(line => {
    if (line.includes('industry:')) {
        if (line.includes('Agriculture')) return "    industry: 'Agriculture & Supply Chain',";
        if (line.includes('FinTech')) return "    industry: 'FinTech & AI Trading',";
        if (line.includes('Healthcare')) return "    industry: 'Healthcare & Telemedicine',";
        if (line.includes('Luxury')) return "    industry: 'Luxury Brand & E-Commerce',";
    }
    return line;
});

fs.writeFileSync('src/data/mockData.ts', lines.join('\n'), 'utf8');
