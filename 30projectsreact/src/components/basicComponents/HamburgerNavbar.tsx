import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { navbarData } from '../../.././utils/dummyData';
import { NavbarDataType } from '../../../types';

export default function HamburgerNavbar(): JSX.Element {
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);
  return (
    <div className='h-14 flex justify-between w-11/12 mx-auto items-center relative'>
      <img
        src='https://opticaorg-dev-cac7d2csctagc8bm.z01.azurefd.net/$web/optica/media/files/brand/logos/logo_optica_white_box_rgb_300dpi.png'
        alt='brand'
        width={150}
        height={90}
        className='hidden sm:block'
      />
      <div className='gap-4 hidden sm:flex'>
        {navbarData.length > 0 &&
          navbarData.map((item: NavbarDataType) => (
            <NavLink to={item.href} key={item.id} className='text-2xl'>
              {item.label}
            </NavLink>
          ))}
      </div>
      <Bars3Icon
        className='size-8 text-black sm:hidden'
        onClick={() =>
          setIsHamburgerMenuVisible((prevState: boolean) => !prevState)
        }
      />
      <img
        src='https://opticaorg-dev-cac7d2csctagc8bm.z01.azurefd.net/$web/optica/media/files/brand/logos/logo_optica_white_box_rgb_300dpi.png'
        alt='brand'
        width={150}
        height={90}
        className='sm:hidden'
      />
      <MagnifyingGlassIcon className='size-8 text-black' />

      {isHamburgerMenuVisible && (
        <div className='absolute flex flex-col gap-4 top-16 left-0 z-10 bg-slate-200 rounded-md w-full shadow-2xl p-3.5'>
          {navbarData.length &&
            navbarData.map((item: NavbarDataType) => (
              <NavLink to={item.href} key={item.label} className='text-2xl'>
                {item.label}
              </NavLink>
            ))}
        </div>
      )}
    </div>
  );
}
