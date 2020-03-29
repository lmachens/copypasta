const crypto = require('crypto');

let resizedIV = Buffer.allocUnsafe(16);
const iv = crypto
  .createHash('sha256')
  .update('myHashedIV')
  .digest();
iv.copy(resizedIV);

function getPastaPassword(secret) {
  return crypto
    .createHash('sha256')
    .update(secret)
    .digest();
}

function restructureAndEncrypt(paste) {
  const encryptedPasteEntries = Object.entries(paste).map(([key, value]) => [
    key,
    encrypt(value)
  ]);
  const encryptedPasteObject = Object.fromEntries(encryptedPasteEntries);
  return encryptedPasteObject;
}

function encrypt(value) {
  const pastaPassword = getPastaPassword('abc');
  const cryptoCipher = crypto.createCipheriv(
    'aes256',
    pastaPassword,
    resizedIV
  );

  let encryptedValue = cryptoCipher.update(value, 'utf-8', 'hex');
  encryptedValue += cryptoCipher.final('hex');

  return encryptedValue;
}

exports.encrypt = encrypt;
exports.restructureAndEncrypt = restructureAndEncrypt;
