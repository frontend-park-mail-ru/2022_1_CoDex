const fs = require('fs');
const path = require('path');
const pug = require('pug');

const basedir = './public/components';

const walker = async (dir, handler) => {
  await new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) return reject(err);
      Promise.all(
          files.map((file) => {
            return new Promise(async (resolve) => {
              const filename = `${dir}/${file}`;
              const stats = fs.statSync(filename);
              if (stats.isDirectory()) {
                return resolve(await walker(filename, handler));
              }
              handler(filename);
              resolve();
            });
          }),
      ).then(resolve);
    });
  });
};

const compilePug = async () => {
    const result = [];
    const handler = (filename) => {
      if (!filename.endsWith('.pug')) return;
  
      console.log(filename);
      const name = path.basename(filename.replace('.pug', ''));
  
      const templateFunc = pug.compileFileClient(
          filename, {
            name: name,
            basedir: './public/',
          });
  
      result.push(templateFunc);
    };
  
    await walker(basedir, handler);
    console.log('compiled ', result.length);
    fs.writeFileSync('./public/templates.js', result.join('\n'));
};

compilePug();