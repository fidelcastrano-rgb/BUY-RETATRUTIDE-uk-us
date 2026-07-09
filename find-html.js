const fs = require('fs');
const path = require('path');

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === '.next') continue;
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.js')) {
            const content = fs.readFileSync(p, 'utf8');
            if (content.includes('next/document')) {
                console.log('FOUND next/document in', p);
            }
            if (content.includes('<Html') || content.includes('<Html>')) {
                console.log('FOUND <Html in', p);
            }
        }
    }
}
walk('.');
