import {Route, Routes} from 'react-router-dom';
import { ScrollProvider } from './components/ScrollContext/ScrollContext.tsx';

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import React from 'react';


const App = () => {
  return (
    <ScrollProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </ScrollProvider>
  );
};

export default App;
