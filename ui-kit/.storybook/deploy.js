const ghpages = require('gh-pages');
const path = require('path');
const token = process.env.ACCESS_TOKEN;

console.log('📦 개발용 스토리북 배포를 준비 중 입니다...');

ghpages.publish(path.join(__dirname, '../storybook-static'), {
  branch: 'master',
  remote: 'origin',
  repo: `https://${token}@github.com/Lubycon/lubycon-ui-kit-storybook.git`,
  message: `개발용 스토리북 배포`,
  callback: (err) => {
    if (err) {
      console.log('😢 배포에 실패하였습니다.');
      console.error(err);
    } else {
      console.log('🚀 개발용 스토리북 배포가 완료되었습니다!')
    }
  }
});
