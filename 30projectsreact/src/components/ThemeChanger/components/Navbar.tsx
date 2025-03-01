import { NavLink } from 'react-router';

import { navbarData } from '../../../../utils/dummyData';

export default function Navbar(): JSX.Element {
  return (
    <div className='flex justify-between w-10/12 mx-auto bg-orange-400 p-3 rounded-md mt-2 shadow-xl'>
      {navbarData.length > 0 &&
        navbarData.map((item) => (
          <NavLink
            to={item.href}
            key={item.id}
            className='list-none text-white cursor-pointer hover:text-black'
          >
            {item.label}
          </NavLink>
        ))}
    </div>
  );
}
