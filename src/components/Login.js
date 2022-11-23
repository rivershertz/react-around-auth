import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn({
      email: email,
      password: password,
    });
  }

  return (
    <div className='auth-form'>
      <h2 className='auth-form__title'>Log in</h2>
      <form className='auth-form__form' onSubmit={handleSubmit}>
        <div className='auth-form__sub-section'>
          <input
            type='email'
            placeholder='Email'
            className='auth-form__input'
            onChange={handleEmailChange}
            value={email}
          />
          <input
            type='password'
            placeholder='Password'
            className='auth-form__input'
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className='auth-form__sub-section'>
          <button className='auth-form__submit'>Log in</button>
          <p className='auth-form__redirect'>
            Not a member yet?&nbsp;
            <Link to='/signup' className='auth-form__link'>
              Sign up here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
