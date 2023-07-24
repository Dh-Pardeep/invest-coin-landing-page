import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenImg from '../assets/img/png/ManPic.png'
import GirlOne from '../assets/img/png/GirlOne.png'
import GirlTwo from '../assets/img/png/GirlTwo.png'
import PlayImg2 from '../assets/img/png/PlayBtn2.png'
const ImgVideoSec = () => {
  return (
    <>
      <section>
        <Container>
          <Row className='d-flex align-items-center flex-column-reverse flex-lg-row pb-4 pb-sm-5 my-xxl-5'>
            <Col xs={12} lg={6} xl={7} className='d-flex justify-content-center justify-content-lg-start mt-4 mt-sm-5'>
              <div className='d-flex align-items-center flex-lg-row' >
                <img data-aos="fade-right" className='h_520  pic_scale c_pointer' src={MenImg} alt="MenImage" />
                <div className='d-flex flex-column flex-sm-row flex-lg-column flex-xl-row'>
                  <div className='py-3 px-sm-2 px-md-3 position-relative' data-aos="zoom-out-up">
                    <img className='w-100 Girl_img h_343 pic_scale c_pointer ImgVideo' src={GirlOne} alt="GirlOne" />
                    <div className="PlayBtnTwo position-absolute GirlOne d-flex justify-content-center align-items-center">
                      <img className="PlayImgTwo w-100 mt-0 ms-2"  src={PlayImg2} alt="PlayImg" />
                    </div>
                  </div>
                  <div className='py-3 px-sm-2 px-md-3 position-relative mt-sm-5 mt-lg-0  mt-xl-5'data-aos="zoom-out-up">
                    <img className='w-100 Girl_img h_343 pic_scale c_pointer ImgVideo' src={GirlTwo} alt="GirlTwo" />
                    <div className="PlayBtnTwo position-absolute GirlTwo d-flex justify-content-center align-items-center">
                      <img className="PlayImgTwo w-100 mt-0 ms-2"  src={PlayImg2} alt="PlayImg" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={5}>
              <div className='ms-xl-5 mt-md-5 mt-lg-0 mt-4 mt-sm-5'data-aos="fade-left">
                <h2 className='ff_open color_252 fs_20 fw-bold mb-3'>Обучение?</h2>
                <p className='fw-normal ff_open color_252 fs_36 Para_4'><span className='fs_40'data-aos="zoom-in">Конечно!</span> Индивидуальные уроки тем кто хочет научиться инвестировать.</p>
                <div className='mt-4'>
                  <h2 className='ff_open color_252 fs_20 fw-bold pt-2 mb-0'>Подробнее посмотрите на видео</h2>
                  <h3 className='ff_open color_222 fs_18 fw-normal mb-0'>Или напишите менеджеру</h3>
                </div>
                <div className='pt-2'>
                  <Link  data-aos="flip-left" className='btn_3_hover fw-bold ff_open fs_20 color_white d-inline-block Btn_4 mt-4'>Написать</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ImgVideoSec