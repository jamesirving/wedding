const axios = require('axios');
const functions = require('firebase-functions');

const USER_ERROR_CODES = ['missing-input-response', 'invalid-input-response'];

exports.sendRecaptcha = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', functions.config().recaptcha.origin);
  res.set('Access-Control-Allow-Origin', '*');

  const secret = functions.config().recaptacha.key;
  const token = req.query.token;
  console.log('token', token);

  try {
    const response = await axios.get(
      `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );
    const { data } = response;
    console.log('response data: ', data);

    if (data.success) {
      return res.status(200).send({ score: data.score });
    }

    const errorCodes = data['error-codes'];

    if (errorCodes.length === 1 && USER_ERROR_CODES.includes(errorCodes[0])) {
      return res.status(400).send('Invalid Input');
    }
    return res.status(500).send('Internal Error');
  } catch (error) {
    console.log('error: ', error);
    return res.status(500).send('Internal Error');
  }
});
