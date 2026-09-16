const fs = require('fs');

let heroCode = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// The hero currently has: pt-12 pb-20 lg:pt-20 lg:pb-32
heroCode = heroCode.replace(
  /pt-12 pb-20 lg:pt-20 lg:pb-32/,
  'pt-32 pb-20 lg:pt-40 lg:pb-32'
);

fs.writeFileSync('src/components/Hero.tsx', heroCode);
console.log('Hero padding updated to fix navbar overlap.');
