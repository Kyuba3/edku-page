import {Route, Routes} from 'react-router-dom';
import { ScrollProvider } from './components/ScrollContext/ScrollContext.tsx';

import Home from "./pages/Home/Home.tsx";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import React from 'react';
import Products from './pages/Products/Products.tsx';
import SingleProductDetail from './pages/Products/SingleProductDetails.tsx';


const App = () => {
  return (
    <ScrollProvider>
      <div style={{ paddingTop: '70px'}} className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<SingleProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
};

export default App;
