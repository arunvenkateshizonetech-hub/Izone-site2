import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\7b09d315-c070-400d-8940-4861be2f939a';
const publicDir = 'c:\\Users\\ELCOT\\OneDrive - ELCOT\\Pictures\\srivanth\\izonesite\\public';

const images = [
  { src: 'hero_it_team_png_1774962325477.png', dest: 'hero_it_team.png' },
  { src: 'hero_it_dashboard_png_1774962351469.png', dest: 'hero_it_dashboard.png' },
  { src: 'hero_it_coding_png_1774962526683.png', dest: 'hero_it_coding.png' }
];

images.forEach(img => {
  const srcPath = path.join(brainDir, img.src);
  const destPath = path.join(publicDir, img.dest);
  
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Successfully copied ${img.src} to ${img.dest}`);
    } else {
      console.error(`Source file not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Error copying ${img.src}:`, err.message);
  }
});

// Check public dir
console.log('Public dir contents:', fs.readdirSync(publicDir));
