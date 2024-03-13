import React from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel.tsx";

const Home = () => {

  const images: string[] = [
    "https://www.fiamma.it/wp-content/uploads/2022/09/home-segnaposto-header-video.jpg",
    "https://maronicamper.com/wp-content/uploads/2021/11/DSC8544_2-1.webp",
    "https://www.fiamma.it/wp-content/uploads/2022/09/home-segnaposto-header-video.jpg",
    "https://polskicaravaning.pl/img/kampery/2435-camper-van-xl-limited_1.jpg",
    "https://celcamp.pl/wp-content/uploads/2024/01/zabudowa-pickup-camper-gladiator.jpg",
    "https://w4m5z5k5.rocketcdn.me/wp-content/uploads/intereur-4x4-camper-2048x1000.jpg"
  ];

  return (
    <div className={styles.mainContainer}>
      <Carousel images={images} />
    </div>
  )
}

export default Home;