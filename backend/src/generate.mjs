import * as fs from 'node:fs';

if (!fs.existsSync('../../generated')) {
    fs.mkdirSync('../generated', { recursive: true });
}

try {
    fs.writeFileSync('../generated/result.txt', new Date().toTimeString());
} catch (err) {
    console.error('Error writing file:', err);
}
