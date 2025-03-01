import { useState } from 'react';
import { Route, Routes } from 'react-router';

import Navbar from './components/Navbar';
import ThemeChanger from '.';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import { themeContext } from './context/context';

export default function Routing(): JSX.Element {
  const [color, setColor]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  return (
    <themeContext.Provider value={{ color: color, setColor: setColor }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<ThemeChanger />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </themeContext.Provider>
  );
}
