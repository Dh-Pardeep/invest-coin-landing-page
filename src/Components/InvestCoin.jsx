import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Надежность from '../assets/img/svg/Надежность.svg'
import Опыт from '../assets/img/svg/Опыт.svg'
import Прозрачность from '../assets/img/svg/Прозрачность.svg'
const InvestCoin = () => {
    return (
        <>
            <section>
                <Container className='mb-xxl-5'>
                    <div className='text-center pt-xl-5' data-aos="fade-down">
                        <h2 className='color_252 ff_open fs_48 fw-normal mt-5 pt-4 pt-md-5'>Как “Invest Coin” работает? </h2>
                        <p className='color_222 ff_open fs_28 fw-normal Para_1 mx-auto mt-4 mb-xl-5' >Invest Coin - это команда оптыных инвесторов, аналитиков и программистов. Мы работаем на площадках криптовалют (и не только) уже более 4 года и имеем конкурентоспособное портфолио. Все встречи, общения и договоренности с нашими партнерами (клиентами) проходят в прозрачной форме.</p>
                    </div>
                    <Row className='justify-content-center pt-5'>
                        <Col sm={6} lg={4} xl={3}>
                            <div className="box_1 c_pointer text-center mx-3 mx-sm-0 mx-lg-3 "  data-aos="fade-right">
                                <img className='pb-1 ' src={Надежность} alt="Надежность" />
                                <h2 className='ff_open fw-bold fs_20 color_252 mt-2 mb-0'>Надежность</h2>
                                <p className='ff_open fw-normal fs_18 color_222 Para_2 mx-auto pt-3'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} xl={3}>
                            <div className="box_1 c_pointer text-center mx-3 my-4 mx-sm-0 mt-sm-0 mx-lg-3 "  data-aos="zoom-in">
                                <img className='pb-1 2' src={Опыт} alt="Опыт" />
                                <h2 className='ff_open fw-bold fs_20 color_252 mt-2 mb-0'>Опыт</h2>
                                <p className='ff_open fw-normal fs_18 color_222 Para_2 mx-auto pt-3'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} xl={3}>
                            <div className="box_1 c_pointer text-center mx-3 mx-sm-0 mt-md-4 mt-lg-0 mx-lg-3 "  data-aos="fade-left">
                                <img className='pb-1 ' src={Прозрачность} alt="Прозрачность" />
                                <h2 className='ff_open fw-bold fs_20 color_252 mt-2 mb-0'>Прозрачность</h2>
                                <p className='ff_open fw-normal fs_18 color_222 Para_2 mx-auto pt-3'>Slate helps you see how
                                    many more days you need
                                    to work to reach your
                                    financial goal.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default InvestCoin