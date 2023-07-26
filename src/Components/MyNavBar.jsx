import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Instagram from '../assets/img/svg/instagram.svg'
import Telegram from '../assets/img/svg/telegram.svg'
import Whatsapp from '../assets/img/svg/whatsapp.svg'
import Logo from '../assets/img/svg/Logo.svg'
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const MyNavBar = () => {
    const [first, setfirst] = useState(true);
    return (
        <div>
            <Container>
                <div className="d-flex align-items-center justify-content-between pt_40 pt_sm_55 pt_md_65 pt_lg_75 pt_xl_90">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <img className=" c_pointer" src={Logo} alt="Logo" />
                        <div className="d-flex justify-content-between w-100 align-items-center ms-5 ps-5">
                            <ul className={first ? "top_m100 ps-0 mb-0 d-flex mobile_ul" : "top ps-0 mb-0 d-flex mobile_ul"} >
                                <li onClick={() => { setfirst(true); }}><Link className=' ff_open c_pointer Nav_Link_Downline Nav_Link position-relative fw-light color_white fs_22  d-inline-block'>Особенности</Link></li>
                                <li onClick={() => { setfirst(true); }}><Link className='my-4 my-lg-0 mx_79 ff_open c_pointer Nav_Link_Downline Nav_Link position-relative fw-light color_white fs_22  d-inline-block'>Отзывы</Link></li>
                                <li onClick={() => { setfirst(true); }} ><Link className=' mb-4 mb-lg-0 ff_open c_pointer Nav_Link_Downline Nav_Link position-relative fw-light color_white fs_22  d-inline-block'>Инвестиция</Link></li>
                                <div className="d-lg-none mb-4 mt-lg-0" onClick={() => { setfirst(false); }}>
                                <Link className=' ff_open c_pointer fw-light color_white fs_22 Social_logo' to={"https://www.instagram.com/"} target='_blank'><img src={Instagram} alt="" /></Link>
                                <Link className='px-3 ff_open c_pointer fw-light color_white fs_22 Social_logo' to={"https://telegram.org/"} target='_blank'><img src={Telegram} alt="" /></Link>
                                <Link className=' ff_open c_pointer fw-light color_white fs_22 Social_logo ' to={"https://www.whatsapp.com/"} target='_blank'><img src={Whatsapp} alt="" /></Link>
                                </div>
                                <div className="d-lg-none position-absolute RxCross2" onClick={() => { setfirst(true); }} ><RxCross2 size={50} color="white" />  </div>
                            </ul>
                            <div className="d-none d-lg-block" onClick={() => { setfirst(false); }}>
                                <Link className=' ff_open c_pointer fw-light color_white fs_22 ' to={"https://www.instagram.com/"} target='_blank'><img className="Social_logo" src={Instagram} alt="" /></Link>
                                <Link className='px-3 ff_open c_pointer fw-light color_white fs_22' to={"https://telegram.org/"} target='_blank'><img className="Social_logo" src={Telegram} alt="" /></Link>
                                <Link className=' ff_open c_pointer fw-light color_white fs_22  ' to={"https://www.whatsapp.com/"} target='_blank'><img className="Social_logo" src={Whatsapp} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-none d-block" onClick={() => { setfirst(false); }}>
                        <div className="nav_icon"></div>
                        <div className="nav_icon"></div>
                        <div className="nav_icon"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyNavBar;