import fs from 'fs';
import path from 'path';

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.jsx')) {
      let content = fs.readFileSync(full, 'utf8');
      content = content.replace(/\\\`/g, '`').replace(/\\\$/g, '$');
      fs.writeFileSync(full, content);
      console.log('Fixed', full);
    }
  }
};

walk('./src');
