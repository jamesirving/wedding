import { getFirebaseDB } from './firebase';
import { validateReCaptcha } from './validate-recaptcha';

const rsvpSubmission = async ({ resolve, reject, token, values }) => {
  const database = getFirebaseDB();
  const reCaptcha = await validateReCaptcha(token);

  if (!reCaptcha.success) {
    reject(Error(reCaptcha));
  } else {
    await database
      .add({ ...values.guests })
      .then(() => {
        resolve({ success: true });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Submission Error: ', error);
        reject(Error(error));
      });
  }
};

export { rsvpSubmission };
