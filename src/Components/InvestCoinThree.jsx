import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LaptopImg from '../assets/img/png/LaptopImg.png'
const InvestCoinThree = () => {
    return (
        <>
            <section>
                <Container className='mt-lg-5 pt-xxl-5'>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={5} data-aos="fade-right">
                            <div>
                                <h2 className='fs_48 fw-normal color_252 ff_open'data-aos="fade-down">Invest Coin - это про безопасность!</h2>
                                <span className='d-inline-block ff_open fs_22 color_222 fw-normal Para_3'>И как выражается безопасность?</span>
                                <p className='ff_open fs_22 color_222 fw-normal Para_3' data-aos="zoom-in">Чем меньше вложений в инвестиции, тем больше риска потерпеть неудачу. Чем больше вложений, тем тем меньше риска.
                                    Безопасность инвестии означает что ваши вложения (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы делают ставки с общего счета, где на балансе всегда больше 100 000$.
                                </p>
                                <p className='ff_open fs_22 color_222 fw-normal Para_3' data-aos="fade-down">
                                    Нажмите на кнопку ниже и узнайте все лично от наших менеджеров</p>
                            </div>
                            <div>
                                <Link data-aos="flip-left" className='btn_3_hover fw-bold ff_open fs_20 color_white d-inline-block Btn_3 my-4 my-lg-5 '>Узнать подробнее</Link>
                            </div>
                        </Col>
                        <Col lg={6} data-aos="fade-left">
                            <div className='mb-5 mt-3'>
                                <img data-aos="flip-left" className=' c_pointer LaptopImg  pic_scale' src={LaptopImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default InvestCoinThree