import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import FullStar from '../assets/img/svg/FullStar.svg'
import Leo from '../assets/img/png/Leo.png'
export default function LeoThreeCardSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 4000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className="pb-lg-5">
            <Container className="pb-5">
                <div className='text-center mb-4 mb-xl-5 slider_dots pt-xxl-5 'data-aos="fade-down">
                    <h2 className='color_252 ff_open fs_43 fw-normal pt-3 pt-xxl-4'>Отзывы наших партнеров</h2>
                    <p className='color_222 ff_open fs_28 fw-normal pt-3 para_5  mx-auto mb-0' >Каждый отзыв по-особенному  ценный для нас. Ведь для этого было проделано большой совместный путь. Успех состоит из доверие, готовности к развитию и перемен.</p>
                </div>
                <Slider {...settings} className="pb-4">
                    <div>
                        <div className="py-5 px-2"data-aos="flip-left">
                            <div className="card_leo mx-auto">
                                <div className="d-flex align-items-baseline">
                                    <div className="d-flex align-items-center">
                                        <img className="w_60px" src={Leo} alt="Leo" />
                                        <div className="ms-2">
                                            <h2 className="mb-0 fs_18 color_white fw-bold ff_open">Али</h2>
                                            <h3 className="mb-0 fs_12 color_white pt-1 ff_open fw-normal">Узбекистан</h3>
                                        </div>
                                    </div>
                                    <img className="pb-2 ps-4" src={FullStar} alt="FullStar" />
                                </div>
                                <p className="para_6 color_white mt-3 pt-1 ps-4 fs_15_min fs_16_md  ff_open fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 px-2"data-aos="flip-left">
                            <div className="card_leo mx-auto">
                                <div className="d-flex align-items-baseline">
                                    <div className="d-flex align-items-center">
                                        <img className="w_60px" src={Leo} alt="Leo" />
                                        <div className="ms-2">
                                            <h2 className="mb-0 fs_18 color_white fw-bold ff_open">Leo</h2>
                                            <h3 className="mb-0 fs_12 color_white pt-1 ff_open fw-normal">Таджикистан</h3>
                                        </div>
                                    </div>
                                    <img className="pb-2 ps-2" src={FullStar} alt="FullStar" />
                                </div>
                                <h6 className="fs_18 color_white fw-bold ps-4 mt-4 fw-bold">It was a very good experience</h6>
                                <p className="para_6 color_white mt-3 pt-1 ps-4 fs_12 mt-2  ff_open fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 px-2"data-aos="flip-left">
                            <div className="card_leo mx-auto">
                                <div className="d-flex align-items-baseline">
                                    <div className="d-flex align-items-center">
                                        <img className="w_60px" src={Leo} alt="Leo" />
                                        <div className="ms-2">
                                            <h2 className="mb-0 fs_18 color_white fw-bold ff_open">Leo</h2>
                                            <h3 className="mb-0 fs_12 color_white pt-1 ff_open fw-normal">Lead Designer</h3>
                                        </div>
                                    </div>
                                    <img className="pb-2 ps-2" src={FullStar} alt="FullStar" />
                                </div>
                                <h6 className="fs_18 color_white fw-bold ps-4 mt-4 fw-bold">It was a very good experience</h6>
                                <p className="para_6 color_white mt-3 pt-1 ps-4 fs_12 mt-2  ff_open fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 px-2"data-aos="flip-left">
                            <div className="card_leo mx-auto">
                                <div className="d-flex align-items-baseline">
                                    <div className="d-flex align-items-center">
                                        <img className="w_60px" src={Leo} alt="Leo" />
                                        <div className="ms-2">
                                            <h2 className="mb-0 fs_18 color_white fw-bold ff_open">Али</h2>
                                            <h3 className="mb-0 fs_12 color_white pt-1 ff_open fw-normal">Узбекистан</h3>
                                        </div>
                                    </div>
                                    <img className="pb-2 ps-4" src={FullStar} alt="FullStar" />
                                </div>
                                <p className="para_6 color_white mt-3 pt-1 ps-4 fs_15_min fs_16_md  ff_open fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 px-2"data-aos="flip-left">
                            <div className="card_leo mx-auto">
                                <div className="d-flex align-items-baseline">
                                    <div className="d-flex align-items-center">
                                        <img className="w_60px" src={Leo} alt="Leo" />
                                        <div className="ms-2">
                                            <h2 className="mb-0 fs_18 color_white fw-bold ff_open">Leo</h2>
                                            <h3 className="mb-0 fs_12 color_white pt-1 ff_open fw-normal">Таджикистан</h3>
                                        </div>
                                    </div>
                                    <img className="pb-2 ps-2" src={FullStar} alt="FullStar" />
                                </div>
                                <h6 className="fs_18 color_white fw-bold ps-4 mt-4 fw ff_open fw-bold">It was a very good experience</h6>
                                <p className="para_6 color_white mt-3 pt-1 ps-4 fs_12 mt-2  ff_open fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 px-2"data-aos="flip-left">
                            <div className="card_leo mx-auto">
                                <div className="d-flex align-items-baseline">
                                    <div className="d-flex align-items-center">
                                        <img className="w_60px" src={Leo} alt="Leo" />
                                        <div className="ms-2">
                                            <h2 className="mb-0 fs_18 color_white fw-bold ff_open">Leo</h2>
                                            <h3 className="mb-0 fs_12 color_white pt-1 ff_open fw-normal">Lead Designer</h3>
                                        </div>
                                    </div>
                                    <img className="pb-2 ps-2" src={FullStar} alt="FullStar" />
                                </div>
                                <h6 className="fs_18 color_white fw-bold ps-4 mt-4  ff_open fw-bold">It was a very good experience</h6>
                                <p className="para_6 color_white mt-3 pt-1 ps-4 fs_12 mt-2  ff_open fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    );
}