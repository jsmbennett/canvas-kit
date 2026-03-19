const fs = require('fs');
const util = require('util');
const path = require('path');
const fsp = require('fs/promises');
const writeFile = util.promisify(fs.writeFile);
const getSpecifications = require('./get-specifications');

function resolveExistingPath(paths) {
  for (const p of paths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return paths[0];
}

getSpecifications().then(async specs => {
  const specsStr = JSON.stringify(specs, null, '  ');
  const specsFilePath = resolveExistingPath([
    path.join(__dirname, '../dist/es6/docs/lib/specs.js'),
    path.join(__dirname, '../dist/es6/lib/specs.js'),
  ]);

  await fsp.mkdir(path.dirname(specsFilePath), {recursive: true});

  if (fs.existsSync(specsFilePath)) {
    const contents = fs
      .readFileSync(specsFilePath)
      .toString()
      .replace('/* SPEC_FILES_REPLACE_BY_WEBPACK */', specsStr.substring(1, specsStr.length - 1));
    await writeFile(specsFilePath, contents);
    return;
  }

  const fallbackContents = `export const specifications = ${specsStr};\n`;
  await writeFile(specsFilePath, fallbackContents);
});
