const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', '.next');

function injectScript(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if script is already injected
    if (content.includes('dashboard-console-capture.js')) {
      return;
    }
    
    // Inject script tag into head
    const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
    
    if (content.includes('<head>')) {
      content = content.replace('<head>', `<head>${scriptTag}`);
      fs.writeFileSync(filePath, content);
      console.log(`✅ Injected console capture script into ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Failed to inject script into ${filePath}:`, error.message);
  }
}

function findHTMLFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHTMLFiles(fullPath));
    } else if (path.extname(item) === '.html') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find and inject into all HTML files
console.log('🔍 Searching for HTML files to inject console capture script...');
const htmlFiles = findHTMLFiles(buildDir);

if (htmlFiles.length === 0) {
  console.log('ℹ️  No HTML files found in build directory');
} else {
  console.log(`📝 Found ${htmlFiles.length} HTML files, injecting console capture script...`);
  htmlFiles.forEach(injectScript);
  console.log('✨ Console capture script injection complete!');
}