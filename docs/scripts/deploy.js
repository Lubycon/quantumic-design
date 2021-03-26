const ghpages = require('gh-pages');
const path = require('path');
const token = process.env.ACCESS_TOKEN;

console.log('📦 UI Kit 문서 알파 배포를 준비 중 입니다...');

ghpages.publish(
  path.join(__dirname, '../out'),
  {
    branch: 'master',
    remote: 'origin',
    repo: `https://${token}@github.com/Lubycon/ui-kit.alpha.lubycon.io.git`,
    message: `UI Kit 문서 배포`,
  },
  (err) => {
    if (err) {
      console.log('😢 배포에 실패하였습니다.');
      console.error(err);
    } else {
      console.log('🚀 UI Kit 문서 알파 배포가 완료되었습니다!');
    }
  }
);
