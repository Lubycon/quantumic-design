const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

const env = process.env.ENV;
const token = process.env.ACCESS_TOKEN;
const deployTarget = env === 'alpha' ? 'ui-kit.alpha.lubycon.io' : 'ui-kit.lubycon.io';

console.log('📦 UI Kit 문서 배포를 준비 중 입니다...');

console.log('🌱 CNAME 만드는 중...');
fs.renameSync(path.resolve(`./CNAME.${env}`), path.resolve('./out/CNAME'));
fs.closeSync(fs.openSync(path.resolve('./out/.nojekyll'), 'w'));
console.log('🌱 CNAME 생성 완료');

ghpages.publish(
  path.join(__dirname, '../out'),
  {
    branch: 'master',
    remote: 'origin',
    repo: `https://${token}@github.com/Lubycon/${deployTarget}`,
    message: `UI Kit 문서 배포`,
  },
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log('🚀 UI Kit 문서 배포가 완료되었습니다!');
    }
  }
);
