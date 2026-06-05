const fs = require('fs');
const https = require('https');
const path = require('path');

const companies = [
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Singapore Airlines", domain: "singaporeair.com" },
  { name: "ICICI Bank", domain: "icicibank.com" },
  { name: "Reliance", domain: "ril.com" },
  { name: "PepsiCo", domain: "pepsico.com" },
  { name: "IIT Delhi", domain: "iitd.ac.in" },
  { name: "TISS", domain: "tiss.edu" },
  { name: "Olympic Committee", domain: "olympics.com" },
  { name: "American Express", domain: "americanexpress.com" },
  { name: "HP", domain: "hp.com" },
  { name: "Times of India", domain: "timesofindia.indiatimes.com" },
  { name: "TEDx", domain: "ted.com" },
  { name: "OYO", domain: "oyorooms.com" },
  { name: "OLA", domain: "olacabs.com" },
  { name: "Indian Oil", domain: "iocl.com" },
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

companies.forEach(company => {
  const filename = company.name.toLowerCase().replace(/\s+/g, '-') + '.png';
  const filepath = path.join(dir, filename);
  // Using Google Favicons API which is highly reliable and provides 128x128 logos
  const url = `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`;
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
      });
    } else {
      console.log(`Failed to download ${filename}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.log(`Error downloading ${filename}: ${err.message}`);
  });
});
