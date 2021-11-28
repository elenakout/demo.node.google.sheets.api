const { GoogleSpreadsheet } = require('google-spreadsheet');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

(async function () {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET);

  await doc.useServiceAccountAuth(require('./cred.json'));
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

}());

module.exports = sheet;
