const ghpages = require('gh-pages');
const path = require('path');
const token = process.env.ACCESS_TOKEN;

console.log('📦 개발용 스토리북 배포를 준비 중 입니다...');
const isProduction = process.ENV === 'live';
const subdomain = isProduction ? 'ui-kit' : 'ui-kit.alpha';

console.log('🌱 CNAME 만드는 듕...');
fs.renameSync(path.resolve(`./CNAME.${env}`), path.resolve('./storybook-static/CNAME'));
console.log('🌱 CNAME 완성');

ghpages.publish(path.join(__dirname, '../storybook-static'), {
  branch: 'master',
  remote: 'origin',
  repo: 'https://${token}@github.com/Lubycon/${subdomain}.lubycon.io.git',
  message: '개발용 스토리북 배포',
}, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`🚀 ${isProduction ? '라이브' : '알파'} 스토리북 배포가 완료되었습니다!`)
  }
});
