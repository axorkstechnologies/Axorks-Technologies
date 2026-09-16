const fs = require('fs');

// Fix ClientStories
let cs = fs.readFileSync('src/components/ClientStories.tsx', 'utf8');
cs = cs.replace(/story\.client/g, 'story.clientName');
cs = cs.replace(/<span className="text-xs font-bold text-\[var\(--text-primary\)\]">\{story\.author\}<\/span>/, '');
cs = cs.replace(/<span className="text-\[10px\] font-mono-code text-\[var\(--text-muted\)\] uppercase tracking-wide">\{story\.role\}<\/span>/, '');
fs.writeFileSync('src/components/ClientStories.tsx', cs);

// Fix StudioTeam
let st = fs.readFileSync('src/components/StudioTeam.tsx', 'utf8');
st = st.replace(/member\.imageUrl/g, 'member.image');
st = st.replace(/member\.bio/g, 'member.description');
fs.writeFileSync('src/components/StudioTeam.tsx', st);

// Fix TeamPage
let tp = fs.readFileSync('src/pages/TeamPage.tsx', 'utf8');
tp = tp.replace(/member\.imageUrl/g, 'member.image');
tp = tp.replace(/member\.bio/g, 'member.description');
tp = tp.replace(/\{member\.linkedinUrl && \([\s\S]*?\}\)/, ''); // Remove linkedin link block entirely
fs.writeFileSync('src/pages/TeamPage.tsx', tp);

// Fix HomePage
let hp = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
hp = hp.replace(/systemUrl=\{project\.systemUrl\}/g, '');
fs.writeFileSync('src/pages/HomePage.tsx', hp);

// Fix DeliveredWorkPage
let dw = fs.readFileSync('src/pages/DeliveredWorkPage.tsx', 'utf8');
dw = dw.replace(/systemUrl=\{project\.systemUrl\}/g, '');
fs.writeFileSync('src/pages/DeliveredWorkPage.tsx', dw);

console.log('Fixed component typings');
