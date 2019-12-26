const moment = require('moment');
const jwt = require('jwt-simple');
const token_secret = "nG:$\xa6\x1e\xfb\xc3\xf10\xddh\x1a\xd1\xcc\x03\xe8\xce\xfc8\xc5\xc1\x8e\xa9";

function encodeToken(user) {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id
  };
//   console.log(process.env.TOKEN_SECRET)
  return jwt.encode(payload, token_secret);
}

function decodeToken(token, callback) {
    try {
        const payload = jwt.decode(token, token_secret);
        const now = moment().unix();
        // check if the token has expired
        if (now > payload.exp) callback({status: 'Token has expired.'});
        else callback(null, payload);
    } catch(err) {
        callback({status: 'signature verification failed'});
    }
    
  }

  module.exports = {
    encodeToken,
    decodeToken
  };