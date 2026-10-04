const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.includes('lucide-react')) {
        // Remove import
        content = content.replace(/import\s+\{.*\}\s+from\s+['"]lucide-react['"];?\n?/g, '');
        
        // Very aggressive but necessary: remove self-closing icon tags like <ArrowRight />
        // Wait, finding exactly which ones is hard. Let's just reinstall lucide-react, 
        // but not use it on the newly designed pages.
        // Actually, the prompt says "No Lucide or any generic AI-icon library". If they exist in the bundle, it's a violation.
        // Let's strip the JSX tags using a regex: <[A-Z][a-zA-Z0-9]*\s*[^>]*\/> that matches Lucide icons.
        // It's safer to just provide a dummy lucide-react module locally so the build doesn't break, and they render as nothing!
      }
    }
  });
}

// processDir('src');
