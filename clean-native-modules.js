import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Путь к директории node_modules
const nodeModulesPath = path.join(__dirname, 'node_modules', '@rollup');

// Проверяем, существует ли директория @rollup
if (fs.existsSync(nodeModulesPath)) {
  // Получаем все поддиректории в @rollup
  const dirs = fs.readdirSync(nodeModulesPath);
  
  // Фильтруем и удаляем платформозависимые директории
  const nativeDirs = dirs.filter(dir => 
    dir.startsWith('rollup-win32') || 
    dir.startsWith('rollup-linux') || 
    dir.startsWith('rollup-darwin')
  );
  
  // Удаляем найденные директории
  for (const dir of nativeDirs) {
    const dirPath = path.join(nodeModulesPath, dir);
    console.log(`Удаление ${dirPath}...`);
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Успешно удалено: ${dir}`);
    } catch (err) {
      console.error(`❌ Ошибка при удалении ${dir}:`, err);
    }
  }
  
  console.log('Очистка завершена!');
} else {
  console.log('Директория @rollup не найдена');
} 