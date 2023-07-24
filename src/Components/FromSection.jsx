import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FromMen from '../assets/img/png/FormMen.png'
import { Link } from 'react-router-dom'
const FromSection = () => {
    return (
        <>
            <section>
                <Container className='mb-xxl-4'>
                    <div className='text-center pt-lg-4' data-aos="fade-down">
                        <h2 className=' ff_open fs_48 fw-normal color_252 mt-5'>Напишите нам</h2>
                        <p className=' ff_open fs_28 fw-normal Para_7 mx-auto color_252 mb-0' >Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить быстро и нам важно узнать ваше мнение.</p>
                    </div>
                    <Row className=' d-flex flex-column-reverse flex-md-row'>
                        <Col xs={12} md={7} lg={6}>
                            <div className='d-flex flex-column pb-5 mt-4' data-aos="fade-right">
                                <input  data-aos="flip-left" type="text" className='from_input c_pointer ff_poppins fw-medium fs_24 color_252' placeholder='Ваше имя' />
                                <input  data-aos="flip-right" type="text" className='from_input c_pointer mt-4 mt-lg-5 ff_poppins fw-medium fs_24 color_252' placeholder='Страна' />
                                <textarea  data-aos="flip-left"  className='from_input c_pointer textareawh   mt-4 mt-lg-5 ff_poppins fw-medium fs_24 color_252' name="" onResize={null} id="" cols="30" rows="10" placeholder='Сообщение'></textarea>
                                <div className='mb-4 '>
                                    <Link  data-aos="flip-right" className='btn_3_hover fw-bold ff_open fs_20 color_white d-inline-block Btn_5'>Отправить</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={5} lg={6} >
                            <img className='FromMen mb-xl-5 pb-xl-4  mb-4'data-aos="fade-left" src={FromMen} alt="men Pic" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FromSection