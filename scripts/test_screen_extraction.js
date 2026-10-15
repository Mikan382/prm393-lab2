const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, 'create_full_screens_svg.js'), 'utf8');
const lines = src.split('\n');

const markers = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- SCR-') || lines[i].includes('</svg>')) {
    markers.push({ line: i + 1, text: lines[i].trim() });
  }
}

console.log(markers);
