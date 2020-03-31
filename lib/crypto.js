const crypto = require('crypto');

let resizedIV = Buffer.allocUnsafe(16);
const iv = crypto
  .createHash('sha256')
  .update('myHashedIV')
  .digest();
iv.copy(resizedIV);

function createCipherKey(secret) {
  return crypto
    .createHash('sha256')
    .update(secret)
    .digest();
}

function encrypt(value, secret) {
  const cipherKey = createCipherKey(secret);
  const cryptoCipher = crypto.createCipheriv('aes256', cipherKey, resizedIV);

  let encryptedValue = cryptoCipher.update(value, 'utf-8', 'hex');
  encryptedValue += cryptoCipher.final('hex');

  return encryptedValue;
}

exports.encrypt = encrypt;
