import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import bottle from '../../assets/bottle_10pct.png';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="wrapper">
      <div
        className="authentication-container"
        style={{ backgroundImage: `url(${bottle})` }}
      >
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};
export default Authentication;
