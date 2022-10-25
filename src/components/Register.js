import { Link } from 'react-router-dom';

function Register() {
  return (
    <div style={{ color: 'white' }} className='page'>
      <h2 className='popup__title'>Sign up</h2>
      <form className='popup__form'>
        <input type='email' />
        <input type='password' />
        <button>Sign up</button>
        <p>
          Already a member?
          <Link to='/login'>Log in here!</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
