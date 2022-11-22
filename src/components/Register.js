import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register({ onSignUp }) {
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
    onSignUp({
      email: email,
      password: password,
    });
  }

  return (
    <div className='auth-form'>
      <h2 className='auth-form__title'>Sign up</h2>
      <form className='auth-form__form' onSubmit={handleSubmit}>
        <div className='auth-form__sub-section'>
          <input
            type='email'
            placeholder='Email'
            className='auth-form__input'
            onChange={handleEmailChange}
            value=''
          />
          <input
            type='password'
            placeholder='Password'
            className='auth-form__input'
            onChange={handlePasswordChange}
            value=''
          />
        </div>
        <div className='auth-form__sub-section'>
          <button className='auth-form__submit'>Sign up</button>
          <p className='auth-form__redirect'>
            Already a member?&nbsp;
            <Link to='/login' className='auth-form__link'>
              Log in here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
