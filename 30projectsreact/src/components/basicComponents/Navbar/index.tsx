import { Link } from 'react-router';

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <ul className='flex gap-3'>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/register'}>
          <li>Register</li>
        </Link>
        <Link to={'login'}>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}
