const fs = require('fs');
let st = fs.readFileSync('src/components/StudioTeam.tsx', 'utf8');
st = st.replace(/founder\.imageUrl/g, 'founder.image');
fs.writeFileSync('src/components/StudioTeam.tsx', st);

let tp = fs.readFileSync('src/pages/TeamPage.tsx', 'utf8');
// Replace the linkedin block
tp = tp.replace(/\{member\.linkedinUrl && \([\s\S]*?\)\}/, '');
fs.writeFileSync('src/pages/TeamPage.tsx', tp);
