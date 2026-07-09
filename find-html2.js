const fs = require('fs');
const path = require('path');

function walk(dir) {
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch(e){return;}
    for (const file of files) {
        if (dir === 'node_modules' && file === 'next') continue;
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (p.endsWith('.js') || p.endsWith('.mjs')) {
            const content = fs.readFileSync(p, 'utf8');
            if (content.includes('next/document')) {
                console.log('FOUND next/document in', p);
            }
        }
    }
}
walk('node_modules');
