const fs = require('fs');
const path = require('path');

const tokenRead = () => {
  try {
    const absolutePath = path.resolve('./jwt.evaluation.key');
    const secret = fs.readFileSync(absolutePath, { encoding: 'utf8' });
    return secret;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = tokenRead;
