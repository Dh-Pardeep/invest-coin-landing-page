import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SliderBitcoin from '../assets/img/png/bitcoinslider.png'
import LiteCoin from '../assets/img/png/litecoin.png'
import Tezos from '../assets/img/png/tezos.png'
import Ethereum from '../assets/img/png/ethereum.png'
import Chainlink from '../assets/img/png/Chainlink.png'
import Ton from '../assets/img/png/ton_logo.png'
export default function MySliderTwo() {
    var settings = {
        infinite: true,
        slidesToShow: 5.2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]

    };
    return (
        <section>
            <Container className="Slick-Center">
                <div className='text-center mb-5 pt-3 pt-xxl-4' data-aos="fade-down">
                    <h2 className='color_252 ff_open fs_48 fw-normal'>Наши площадки</h2>
                    <p className='color_222 ff_open fs_28 fw-normal pt-3 para_5  mx-auto' >Наш проект работает только с проверенными площадками для инвестиций, чтобы максимально снизить риски.</p>
                </div>
                <Slider {...settings} className="py-1 py-md-3 py-lg-4"  >
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={SliderBitcoin} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={LiteCoin} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Tezos} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Ethereum} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Chainlink} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Ton} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={SliderBitcoin} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={LiteCoin} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Tezos} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Ethereum} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Chainlink} alt="Slider Image" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="imgHover_1" src={Ton} alt="Slider Image" />
                    </div>
                </Slider>
                <div className="text-center" data-aos="zoom-in">
                    <div className="SliderDownLine  mx-auto my-5"></div>
                </div>
            </Container>
        </section>
    );
}