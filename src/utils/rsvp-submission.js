import { database } from './firebase';
import { validateReCaptcha } from './validate-recaptcha';

const ERROR_MESSAGE =
  'There was an error submitting the form, please try again. If the problem persists please let us know.';

const rsvpSubmission = ({ token, values, setStatus, setSubmitting }) => {
  validateReCaptcha(token).then(reCaptcha => {
    console.log('reCaptcha: ', reCaptcha);
    if (!reCaptcha.success) {
      setStatus(reCaptcha);
      return reCaptcha;
    }

    database
      .collection('Wedding')
      .add({ ...values.guests })
      .then(() => {
        setStatus({ success: true });
        setSubmitting(false);
        return { success: true };
      })
      .catch(error => {
        setSubmitting(false);
        setStatus({
          error: ERROR_MESSAGE,
        });
        // eslint-disable-next-line no-console
        console.log('submition error: ', error);
        return { success: false, error };
      });

    return { success: false, error: "I don't know how this happened" };
  });
};

export { rsvpSubmission };
