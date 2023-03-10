import { useRef } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';

const SignUpForm = () => {
  const displayName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const confirmPassword = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // assign ref values to local scope to clear the fields without waiting for firebase
    const emailLocal = email.current.value;
    const passwordLocal = password.current.value;
    const confirmPasswordLocal = confirmPassword.current.value;
    const displayNameLocal = displayName.current.value;
    e.target.reset();
    if (passwordLocal !== confirmPasswordLocal) {
      alert('Please make sure both passwords are matching');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        emailLocal,
        passwordLocal
      );

      await createUserDocumentFromAuth(user, {
        displayName: displayNameLocal,
      });
      alert('Account created succesfully');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('Email already in use');
      else console.log('user creation encountered an error', e);
    }
  };

  return (
    <div>
      <h3 className="email-password-title">Sign up with Email and Password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          ref={displayName}
        />
        <FormInput label="Email" type="email" required ref={email} />
        <FormInput
          label="Password"
          type="password"
          required
          ref={password}
          minLength="6"
          maxLength="10"
          autoComplete="new-password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          ref={confirmPassword}
          minLength="6"
          maxLength="10"
          autoComplete="new-password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
