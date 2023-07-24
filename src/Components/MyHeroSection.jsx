import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MyNavBar from './MyNavBar'


const MyHeroSection = () => {
    return (
        <section className='Bg_image_top'>
             <MyNavBar />
            <Container>
                <Row className='justify-content-end mt-xl-5' data-aos="fade-left">
                    <Col sm={12} md={8} lg={7} xl={6} className='mt-md-3 mt-lg-4 mt-xl-5'  >
                        <div className='pt-5 mt-4 mt-sm-5'>
                            <h2 className='ff_open fw-normal fs_28 color_809 text_uppercase' data-aos="flip-right">Лучший проект</h2>
                            <h1 className='fs_75 HeroHeading ff_open fw_800 color_white text_uppercase my-3 ' data-aos="flip-right">КPипто
                                <span className='d-inline-block fw-bold color_809' data-aos="flip-right">Инвестиции</span></h1>
                            <p className='ff_open fs_24 fw_normal color_white mb-4 pb-3'>Международный проект инвестиции в криптовалюту и не только. Мы заработаем если вы заработаете!</p>
                            <div className='mb-5 d-flex flex-column flex-sm-row'>
                                <div>
                                    <Link data-aos="flip-left" className=' fw-bold ff_open fs_20 d-inline-block Btn_1 btn_1_hover'>Присоединиться</Link>
                                </div>
                                <div className='ms-lg-2'>
                                    <Link data-aos="flip-left" className=' fw-bold ff_open fs_20 color_252 d-inline-block Btn_2 mt-3 mt-sm-0 ms-sm-4 '>Подробнее</Link>
                                </div>
                            </div>
                            <div className='d-flex flex-column flex-sm-row mb-5'>
                                <div className='d-flex align-items-center me-4 ' data-aos="flip-up">
                                    <h2 className='fs_50 fw-bold color_809 ff_open mb-0'>360</h2>
                                    <div>
                                        <h3 className='fs_14 color_809 ff_open fw-normal mb-0 heading_360'>Довольных клиентов</h3>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center mt-3 mt-sm-0' data-aos="flip-up">
                                    <h2 className='fs_50 fw-bold color_809 ff_open mb-0'>330K</h2>
                                    <div>
                                        <h3 className='fs_14 color_809 ff_open fw-normal mb-0 heading_360'>заработанных долларов</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyHeroSection