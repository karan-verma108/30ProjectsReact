import { useContext } from 'react';
import { themeContext } from '../context/context';

export default function Projects(): JSX.Element {
  const theme = useContext(themeContext);

  console.log('theme in prjects', theme);

  return (
    <div style={{ backgroundColor: theme?.color }}>
      <h1>This is projects section</h1>

      <h2>
        I've recived this background color from the home page using the
        useContext hook
      </h2>
    </div>
  );
}
