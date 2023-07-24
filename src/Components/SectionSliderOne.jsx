import React from "react";
import Slider from "react-slick";
import SliderLeft from '../assets/img/png/Sliderleft.png'
import SliderCenter from '../assets/img/png/SliderCenter.png'
import SliderRight from '../assets/img/png/SliderRight.png'
import PlayImg from '../assets/img/png/PlayBtn.png'
export default function SectionSliderOne() {
    var settings = {
        centerMode: true,
        slidesToShow: 2.3,
        centerPadding: "60px",
        autoplayspeed: 4000,
        speed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "30px",
                    slidesToShow: 2.3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "0 ",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "0 ",
                    slidesToShow: 1,
                },
            },
        ],

    };
    return (
        <Slider {...settings} >
            <div className="py-md-3 py-xl-5 px-3" data-aos="flip-left">
                <div className="c_pointer py-5 px_55 position-relative">
                    <img className="w-100 SliderImg" src={SliderLeft} alt="SliderLeft" />
                    <div className="PlayBtn position-absolute d-flex justify-content-center align-items-center">
                        <img className="PlayImg w-100 mt-0 ms-2" src={PlayImg} alt="PlayImg" />
                    </div>
                </div>
            </div>
            <div className="py-md-3 py-xl-5 px-2" data-aos="flip-left">
                <div className="c_pointer px_55 py-5 position-relative">
                    <img className="w-100 SliderImg " src={SliderCenter} alt="SliderCenter" />
                    <div className="PlayBtn position-absolute d-flex justify-content-center align-items-center">
                        <img className="PlayImg w-100 mt-0 ms-2" src={PlayImg} alt="PlayImg" />
                    </div>
                </div>
            </div>
            <div className="py-md-3 py-xl-5 px-3" data-aos="flip-left">
                <div className="c_pointer py-5 px_55 position-relative">
                    <img className="w-100 SliderImg " src={SliderRight} alt="SliderRight" />
                    <div className="PlayBtn position-absolute d-flex justify-content-center align-items-center">
                        <img className="PlayImg w-100 mt-0 ms-2" src={PlayImg} alt="PlayImg" />
                    </div>
                </div>
            </div>
        </Slider>
    )
}
