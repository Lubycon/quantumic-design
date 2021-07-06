const ghpages = require('gh-pages');
const path = require('path');
const token = process.env.ACCESS_TOKEN;

console.log('📦 개발용 스토리북 배포를 준비 중 입니다...');
const subdomain = process.ENV === 'alpha' ? 'ui-kit.alpha' : 'ui-kit';

ghpages.publish(path.join(__dirname, '../storybook-static'), {
  branch: 'master',
  remote: 'origin',
  repo: `https://${token}@github.com/Lubycon/${subdomain}.lubycon.io.git`,
  message: `개발용 스토리북 배포`,
}, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('🚀 개발용 스토리북 배포가 완료되었습니다!')
  }
});
