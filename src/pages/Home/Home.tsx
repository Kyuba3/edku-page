import React from "react";
import  "./Home.scss";
import Carousel from "../../components/Carousel/Carousel.tsx";
import Contact from "../Contact/Contact.tsx";
import { useScroll } from '../../components/ScrollContext/ScrollContext';
import About from "../About/About.tsx";
import ArticlesList from "../Articles/ArticleList/ArticleList.tsx";
import AddArticle from "../../components/AddArticle/AddArticle.tsx";
import ProductsAtHome from "../../components/ProductsAtHomePage/ProductsAtHomePage.tsx";
import HeaderView from "../../components/Header/HeaderView.tsx";

const Home = () => {
  const { sectionRefs } = useScroll();

  const images: any = [
    "https://www.fiamma.it/wp-content/uploads/2022/09/home-segnaposto-header-video.jpg",
    "https://maronicamper.com/wp-content/uploads/2021/11/DSC8544_2-1.webp",
    "https://www.fiamma.it/wp-content/uploads/2022/09/home-segnaposto-header-video.jpg",
    "https://polskicaravaning.pl/img/kampery/2435-camper-van-xl-limited_1.jpg",
    "https://celcamp.pl/wp-content/uploads/2024/01/zabudowa-pickup-camper-gladiator.jpg",
    "https://w4m5z5k5.rocketcdn.me/wp-content/uploads/intereur-4x4-camper-2048x1000.jpg"
  ];

  return (
    <div className='main-container' ref={sectionRefs.home}>
      {/* <Carousel images={images} /> */}
      <HeaderView />
      <ProductsAtHome />
      <div ref={sectionRefs.about}><About /></div>
      <ArticlesList limit={3}/>
      <AddArticle />
      <div ref={sectionRefs.contact}><Contact /></div>
    </div>
  )
}

export default Home;