import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Header.scss';

const Header = ({ auth }) => {
  // console.log("My auth status is", auth)

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  )
  return (
    <div className={classes.Test}>
      <nav>
        <div className="nav-wrapper" style={{textAlign: 'center'}}>
          <Link to="/" className="brand-log">React SSR</Link>
          <ul className="right">
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/admins">Admins</Link></li>
            <li>{authButton}</li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
