import { useRef } from 'react';

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input-field/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const SignInForm = () => {
  const email = useRef('');
  const password = useRef('');

  // calls firebase utils
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  // regular auth method submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // assign ref values to local scope to clear the fields without waiting for firebase
    const emailLocal = email.current.value;
    const passwordLocal = password.current.value;
    e.target.reset();
    // input checks
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        emailLocal,
        passwordLocal
      );
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('No user found');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div>
      <h2 className="section-title">Sign in to existing account</h2>
      <h3 className="email-password-title">Sign in with Email and Password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required ref={email} />
        <FormInput
          label="Password"
          type="password"
          required
          ref={password}
          minLength="6"
          maxLength="10"
          autoComplete="current-password"
        />
        <div className="sign-buttons-wrapper">
          <Button type="submit" kind="primary">
            Sign In
          </Button>
          <Button type="button" kind="google" onClick={logGoogleUser}>
            Sign in with
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
