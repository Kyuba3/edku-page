import {Route, Routes} from 'react-router-dom';
import { ScrollProvider } from './components/ScrollContext/ScrollContext.tsx';

import Home from "./pages/Home/Home.tsx";
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import React from 'react';
import Products from './pages/Products/Products.tsx';
import SingleProductDetail from './pages/Products/SingleProductDetails.tsx';
import ArticleDetails from './components/AddArticle/ArticleDetails.tsx';
import ArticlesList from './pages/Articles/ArticleList/ArticleList.tsx';
import SearchResults from './components/SearchResults/SearchResults.tsx';
import ContactPage from './pages/Contact/ContactPage.tsx';


const App = () => {

  return (
    <ScrollProvider>
      <div className='flex flex-col min-h-screen navbar-container'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<SingleProductDetail />} />
            <Route path='/articles' element={<ArticlesList />} />
            <Route path='/article/:id' element={<ArticleDetails />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
};

export default App;
