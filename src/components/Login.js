import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ color: 'white' }}>
      <h1>Login</h1>
      <Link to='/signup'>signup</Link>
    </div>
  );
}

export default Login;
