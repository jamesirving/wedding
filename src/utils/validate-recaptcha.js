import axios from 'axios';

const apiString = 'https://us-central1-wedding-4fa01.cloudfunctions.net/sendRecaptcha';

const validateReCaptcha = async token => {
  try {
    const response = await axios.get(`${apiString}?token=${token}`);
    const { data } = response;
    const { score } = data;

    if (score < 0.5) {
      const error =
        "reCaptcha validation failed. If you are you sure you're not a robot, please try again. If the problem persists please let us know.";

      // eslint-disable-next-line no-console
      console.log(error, score);

      return { success: false, error };
    }
    return { success: true, score };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('reCaptcha validation error: ', error);

    return { success: false, error };
  }
};

export { validateReCaptcha };
