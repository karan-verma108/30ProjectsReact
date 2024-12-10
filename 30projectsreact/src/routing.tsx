import { Routes, Route } from 'react-router';

import About from './components/basicComponents/Navbar/About';
import Help from './components/basicComponents/Navbar/Help';
import Navbar from './components/basicComponents/Navbar';
import Home from './components/basicComponents/Navbar/Home';

export default function Routing(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </>
  );
}
