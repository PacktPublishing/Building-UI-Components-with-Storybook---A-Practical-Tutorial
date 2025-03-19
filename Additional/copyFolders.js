const fs = require('fs');
const path = require('path');

const sourceFolder = './unfinished';
const destinationFolder = './destination';

// Create the destination folder if it doesn't exist
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder);
}

// Get all the folders in the source folder
const folders = fs.readdirSync(sourceFolder, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Copy each folder to the destination folder
for (const folder of folders) {
  const sourcePath = path.join(sourceFolder, folder);
  const destinationPath = path.join(destinationFolder, folder);

  fs.mkdirSync(destinationPath);
}