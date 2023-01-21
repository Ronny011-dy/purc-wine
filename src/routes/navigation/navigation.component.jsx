import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

import mainLogo from '../../assets/logo.png';
import './navigation.styles.scss';

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img className="logo" src={mainLogo} />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop our collection
        </Link>
        <Link className="nav-link" to="/sign-in">
          Sign In
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;
