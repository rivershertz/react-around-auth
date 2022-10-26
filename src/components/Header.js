import HeaderLogo from '../images/header_logo.png';
import { Route, Link } from 'react-router-dom';

function Header({ handleSignOut, userEmail }) {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src={HeaderLogo}
        alt='website logo. Around the U.S.'
      />
      <div>
        <Route path='/signup'>
          <Link className='header__link' to='/login'>
            Log in
          </Link>
        </Route>
        <Route path='/login'>
          <Link className='header__link' to='/signup'>
            Sign up
          </Link>
        </Route>
        <Route exact path='/'>
          <div className='header__menu'>
            <p className='header__user-info'>{userEmail}</p>
            <button className='header__button' onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </Route>
      </div>
    </header>
  );
}

export default Header;
