const fs = require("fs");
const path = require("path");

function checkBOM(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && file !== "node_modules" && file !== ".git" && file !== "dist") {
      checkBOM(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith(".js") || fullPath.endsWith(".jsx") || fullPath.endsWith(".html") || fullPath.endsWith(".css"))) {
      const buffer = Buffer.alloc(3);
      const fd = fs.openSync(fullPath, "r");
      fs.readSync(fd, buffer, 0, 3, 0);
      fs.closeSync(fd);
      if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
        console.log("BOM found in:", fullPath);
      }
    }
  }
}
checkBOM(process.cwd());
console.log("Done checking for BOMs.");
