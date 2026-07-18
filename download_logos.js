const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = {
  "psh.png": "https://bombaspsh.com/wp-content/uploads/2020/09/logo-2.png",
  "kripsol.png": "https://cdn.hayward.fr/production/media/4/4/9/1/49a3f6.png",
  "waterco.svg": "https://www.waterco.com.au/waterco/web-img/logos/header/logo-full.svg",
  "hidroten.png": "https://hidroten.com/frontend/imgs/logoHidroten.png",
  "injecta.png": "https://www.injecta.eu/wp-content/uploads/2022/06/Logo-Injecta.png",
  "phonovox.png": "https://phonovoxsa.com/wp-content/uploads/2019/09/phonovox-logotipo.png",
  "ivar.png": "https://www.ivarindustry.it/wp-content/uploads/ivarindustry.png",
  "unex.png": "https://www.unex.at/wGlobal/wGlobal/layout/images/logo-25-jahre.png",
  "sicctech.jpg": "https://www.sicc-tech.it/images/sicc-logo-acciaio-Reg_R02.jpg",
  "pedrollo.svg": "https://www.pedrollo.com/public/images/logo.svg"
};

const dir = path.join(__dirname, 'public/images/brands');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

Object.entries(logos).forEach(([filename, url]) => {
  https.get(url, (res) => {
    if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
      if (res.statusCode !== 200 && res.headers.location) {
        https.get(url.startsWith('http') ? res.headers.location : url, (res2) => {
             const file = fs.createWriteStream(path.join(dir, filename));
             res2.pipe(file);
        });
      } else {
        const file = fs.createWriteStream(path.join(dir, filename));
        res.pipe(file);
      }
    }
  }).on('error', (e) => {
    console.error(`Error downloading ${filename}: ${e.message}`);
  });
});
