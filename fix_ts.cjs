const fs = require('fs');

// Fix EvidenceEngine.tsx
let ev = fs.readFileSync('src/components/EvidenceEngine.tsx', 'utf8');
ev = ev.replace(/project\.clientName/g, 'story?.clientName');
ev = ev.replace(/project\.technologies/g, 'project.tags');
ev = ev.replace(/src=\{project\.images\[0\]\}/g, 'src={project.images[0]?.src}');
fs.writeFileSync('src/components/EvidenceEngine.tsx', ev);

// Fix DeliveredWorkPage.tsx
let dw = fs.readFileSync('src/pages/DeliveredWorkPage.tsx', 'utf8');
dw = dw.replace(/project\.clientName/g, 'project.clientAuthor'); // clientAuthor exists
dw = dw.replace(/project\.technologies/g, 'project.tags');
fs.writeFileSync('src/pages/DeliveredWorkPage.tsx', dw);

console.log('Fixed TS errors.');
