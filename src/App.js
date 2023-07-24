import './App.css';
import './Root.css';
import MyNavBar from './Components/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyHeroSection from './Components/MyHeroSection';
import { Container, Row, Col } from 'react-bootstrap'
import InvestCoin from './Components/InvestCoin';
import SectionSliderOne from './Components/SectionSliderOne';
import InvestCoinThree from './Components/InvestCoinThree';
import ImgVideoSec from './Components/ImgVideoSec';
import MySliderTwo from './Components/MySliderTwo';
import LeoThreeCardSlider from './Components/LeoThreeCardSlider';
import Membership from './Components/Membership';
import FromSection from './Components/FromSection';
import FooterSection from './Components/FooterSection';
import ScrollTopArrow from './Components/ScrollTopArrow';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import AOS from "aos";
import MyPreloader from './Components/MyPreloader';
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <ScrollTopArrow />
      <MyPreloader/>
      <MyHeroSection />
      <InvestCoin />
      <SectionSliderOne />
      <InvestCoinThree />
      <ImgVideoSec />
      <MySliderTwo />
      <LeoThreeCardSlider />
      <Membership />
      <FromSection />
      <FooterSection />

    </div>

  );
}

export default App;
