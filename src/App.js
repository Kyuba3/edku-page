import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
