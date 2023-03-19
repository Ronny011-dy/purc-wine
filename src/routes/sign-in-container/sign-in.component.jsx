import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  // calls firebase utils
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="wrapper">
      <div className="sign-in-container">
        <h2 className="title">Sign up with a new account</h2>
        <Button className="button google" onClick={logGoogleUser}>
          Sign in with
        </Button>
        <SignUpForm />
      </div>
    </div>
  );
};
export default SignIn;
