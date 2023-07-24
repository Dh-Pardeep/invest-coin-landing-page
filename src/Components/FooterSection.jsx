import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/svg/FooterLogo.svg'
import { Link } from 'react-router-dom'
const FooterSection = () => {
    return (
        <>
            <section className='Bg_Membership pt-4'>
                <Container>
                    <Row className=' mt-sm-2 mt-lg-5 pt-5'>
                        <Col lg={7} xl={6}>
                            <div className='d-flex flex-column flex-sm-row align-items-sm-start' data-aos="fade-right">
                                <img className='w_173px Social_logo c_pointer' data-aos="zoom-out-up" src={FooterLogo} alt="FooterLogo" />
                                <div className='pt-5 pt-sm-0 ms-sm-5 ps-sm-4'>
                                    <p className='ff_jost fw-normal fs_24 color_white FooterPara'>123 Market St. #22B
                                        Charlottesville, California 44635</p>
                                    <Link className='ff_poppins fs_14 color_white fw-normal Nav_Link_Downline position-relative'>contact@exmpl.page</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='d-flex mt-5 mt-lg-0 ms-xl-4 ms-xxl-5' data-aos="fade-left">
                                <ul className='ps-0 me-5' data-aos="flip-left">
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block Footer_opacity Nav_Link_Downline position-relative'>About</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>Growers</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>Merchants</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>Partners</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>Contact</Link></li>
                                </ul>
                                <ul className='ms-5 ps-5 ' data-aos="flip-left">
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block Footer_opacity Nav_Link_Downline position-relative'>Facebook</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>Telegram</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>WhatsApp</Link></li>
                                    <li><Link className='ff_poppins fs_12 fw-normal color_white d-inline-block mt-2 pt-1  Footer_opacity Nav_Link_Downline position-relative'>Instagram</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className='text-center mt-4 pb-sm-2 pb-lg-5'data-aos="zoom-out-down">
                        <p className='ff_poppins fs_12 fw-normal color_white d-inline-block Footer_opacity py-5'>© 2022 Invest Coin. All rights reserved.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default FooterSection