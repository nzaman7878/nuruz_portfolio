const fs = require('fs');
const path = require('path');

const srcDirs = [
  path.join(__dirname, 'frontend/src/components')
];

const colorMap = {
  'bg-white/5': 'bg-ide-surface',
  'border-white/10': 'border-ide-border',
  'border-white/5': 'border-ide-border',
  'hover:border-white/20': 'hover:border-syntax-variable',
  'text-white': 'text-on-background',
  'text-primary': 'text-syntax-variable',
  'text-secondary': 'text-syntax-string',
  'text-on-surface-variant': 'text-syntax-comment',
  'text-tertiary': 'text-syntax-comment',
  'bg-background': 'bg-ide-bg',
  'bg-gradient-to-r from-primary to-secondary': 'bg-syntax-keyword',
  'shadow-\\[0_0_10px_rgba\\(139,92,246,0.5\\)\\]': 'shadow-none',
  'shadow-\\[0_0_30px_rgba\\(139,92,246,0.05\\)\\]': 'shadow-md',
  'hover:shadow-\\[0_0_30px_rgba\\(139,92,246,0.1\\)\\]': 'hover:shadow-lg hover:border-syntax-variable',
  'hover:shadow-\\[0_0_20px_rgba\\(139,92,246,0.3\\)\\]': 'hover:shadow-lg',
  'bg-primary/10': 'bg-ide-panel',
  'bg-\\[#000000\\]': 'bg-ide-bg text-on-background border-ide-border',
  'focus:border-primary': 'focus:border-syntax-variable',
  'focus:ring-primary': 'focus:ring-syntax-variable',
  'border-2 border-primary': 'border-2 border-syntax-variable',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Exact replacements
  for (const [regexStr, replacement] of Object.entries(colorMap)) {
    const regex = new RegExp(regexStr, 'g');
    content = content.replace(regex, replacement);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.jsx')) {
      processFile(filePath);
    }
  }
}

srcDirs.forEach(processDirectory);
console.log('Done replacing old legacy colors.');
