import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Membership = () => {
    return (
        <>
            <section className='Bg_Membership mt-5 pb-4'>
                <Container className='pb-5'>
                    <div className='text-center py-4 py-lg-5'data-aos="fade-down">
                        <h2 className=' ff_open fs_48 fw-normal color_white mt-5'>Инвестиции</h2>
                        <p className=' ff_open fs_28 fw-normal Para_7 mx-auto color_white mb-5' >Самые оптимальные варианты инвестиций.  Каждый найдет свой путь и начнет уверенно шагать по нему.</p>
                    </div>
                    <Row className='justify-content-center mb-xl-4 '>
                        <Col xs={12} md={6} xl={4} className='py-4 pb-xl-5'>
                            <div className="membercard text-center mx_40"data-aos="flip-right">
                                <h2 className=' ff_open fw-bold fs_20 Member_color mb-0'>FREE</h2>
                                <p className='Membership_para mx-auto pt-1  ff_open fw-normal fs_16 member_color_222'>Organize across all
                                    apps by hand</p>
                                <div className='d-flex align-items-center justify-content-center mt_30 mb_30'>
                                    <h2 className=' ff_open fw-bold fs_75 Member_color mb-0'>0</h2>
                                    <div className='d-flex flex-column align-items-start ms-2'>
                                        <h2 className=' ff_open fw-bold fs_20 Member_color mb-0'>$</h2>
                                        <h3 className=' ff_open fw-normal fs_16 member_color_222 mb-0'>Per Month</h3>
                                    </div>
                                </div>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <Link className='mt_30 d-inline-block  ff_open fw-normal fs_20 OrderNow'>Order Now</Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4}className='py-4 pb-xl-5' >
                            <div className="membercard text-center mx_40 mt-4 mt-md-0"data-aos="flip-right">
                                <h2 className=' ff_open fw-bold fs_20 Member_color mb-0'>STANDARD</h2>
                                <p className='Membership_para mx-auto pt-1  ff_open fw-normal fs_16 member_color_222'>Organize across all
                                    apps by hand</p>
                                <div className='d-flex align-items-center justify-content-center mt_30 mb_30'>
                                    <h2 className=' ff_open fw-bold fs_75 Member_color mb-0'>10</h2>
                                    <div className='d-flex flex-column align-items-start ms-2'>
                                        <h2 className=' ff_open fw-bold fs_20 Member_color mb-0'>$</h2>
                                        <h3 className=' ff_open fw-normal fs_16 member_color_222 mb-0'>Per Month</h3>
                                    </div>
                                </div>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <Link className='mt_30 d-inline-block  ff_open fw-normal fs_20 OrderNow'>Order Now</Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={4} className='py-4 pb-xl-5'>
                            <div className="membercard text-center mx_40 mt-4 mt-xl-0"data-aos="flip-right">
                                <h2 className=' ff_open fw-bold fs_20 Member_color mb-0'>BUSINESS</h2>
                                <p className='Membership_para mx-auto pt-1  ff_open fw-normal fs_16 member_color_222'>Organize across all
                                    apps by hand</p>
                                <div className='d-flex align-items-center justify-content-center mt_30 mb_30'>
                                    <h2 className=' ff_open fw-bold fs_75 Member_color mb-0'>99</h2>
                                    <div className='d-flex flex-column align-items-start ms-2'>
                                        <h2 className=' ff_open fw-bold fs_20 Member_color mb-0'>$</h2>
                                        <h3 className=' ff_open fw-normal fs_16 member_color_222 mb-0'>Per Month</h3>
                                    </div>
                                </div>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <h2 className=' ff_open fw-normal p_10 fs_15 Member_color mb-0'>Pricing Feature</h2>
                                <Link className='mt_30 d-inline-block  ff_open fw-normal fs_20 OrderNow'>Order Now</Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Membership