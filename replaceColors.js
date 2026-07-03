const fs = require('fs');
const path = require('path');

const srcDirs = [
  path.join(__dirname, 'frontend/src/components'),
  path.join(__dirname, 'frontend/src/pages')
];

const colorMap = {
  'bg-\\[#0d1117\\]': 'bg-ide-bg',
  'bg-\\[#161b22\\]': 'bg-ide-surface',
  'bg-\\[#21262d\\]': 'bg-ide-panel',
  'border-\\[#30363d\\]': 'border-ide-border',
  'hover:border-\\[#30363d\\]': 'hover:border-ide-border',
  'hover:bg-\\[#21262d\\]': 'hover:bg-ide-panel',
  'hover:bg-\\[#30363d\\]': 'hover:bg-ide-border',
  'text-\\[#8b949e\\]': 'text-syntax-comment',
  'text-\\[#c9d1d9\\]': 'text-on-background',
  'hover:text-\\[#c9d1d9\\]': 'hover:text-on-background',
  'text-\\[#79c0ff\\]': 'text-syntax-variable',
  'hover:text-\\[#79c0ff\\]': 'hover:text-syntax-variable',
  'border-t-\\[#79c0ff\\]': 'border-t-syntax-variable',
  'text-\\[#ff7b72\\]': 'text-syntax-keyword',
  'text-\\[#a5d6ff\\]': 'text-syntax-string',
  'text-\\[#7ee787\\]': 'text-syntax-string-green',
  'text-\\[#d2a8ff\\]': 'text-syntax-function',
  'text-\\[#f2cc60\\]': 'text-syntax-constant',
  'bg-\\[#ff5f56\\]': 'bg-red-500',
  'bg-\\[#ffbd2e\\]': 'bg-yellow-400',
  'bg-\\[#27c93f\\]': 'bg-green-500'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Custom opacity replacements
  content = content.replace(/bg-\[#0d1117\]\/([0-9]+)/g, 'bg-ide-bg/$1');
  content = content.replace(/bg-\[#161b22\]\/([0-9]+)/g, 'bg-ide-surface/$1');
  content = content.replace(/border-\[#30363d\]\/([0-9]+)/g, 'border-ide-border/$1');
  content = content.replace(/border-\[#2ea043\]\/([0-9]+)/g, 'border-green-600/$1');
  content = content.replace(/text-\[#79c0ff\]\/([0-9]+)/g, 'text-syntax-variable/$1');
  content = content.replace(/bg-\[#79c0ff\]\/([0-9]+)/g, 'bg-syntax-variable/$1');
  content = content.replace(/bg-\[#2ea043\]\/([0-9]+)/g, 'bg-green-600/$1');

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
console.log('Done replacing hardcoded colors.');
