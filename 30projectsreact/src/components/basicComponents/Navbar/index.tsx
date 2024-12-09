import { Link } from 'react-router';

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <ul className='flex gap-3'>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/about'}>
          <li>About</li>
        </Link>
        <Link to={'help'}>
          <li>Help</li>
        </Link>
      </ul>
    </nav>
  );
}
