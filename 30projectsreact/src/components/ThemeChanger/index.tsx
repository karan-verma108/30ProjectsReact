import { useContext } from 'react';

import ColorPicker from '../basicComponents/ColorPicker';
import { themeContext } from './context/context';

export default function ThemeChanger(): JSX.Element {
  const theme = useContext(themeContext);
  if (!theme) {
    throw new Error('theme context is null');
  }

  const { color, setColor } = theme;

  return (
    <div>
      <h1 className='text-4xl text-center'>
        Welcome to theme changer home page
      </h1>
      <ColorPicker
        label='Select Theme Color'
        color={color}
        setColor={setColor}
      />
    </div>
  );
}
