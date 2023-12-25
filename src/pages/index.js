import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaAngleRight, FaArrowRight, FaArrowUp, FaClock, FaDollarSign, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPlane, FaStar, FaUser, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { IoLocationSharp, IoMailOpen, IoPeopleSharp } from "react-icons/io5";
import { TbTimeDuration30, TbTimeDuration5, TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useTranslation } from 'react-i18next';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isFlagSet, setIsFlagSet] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [Openmenu, setOpenmenu] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    destination: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formspree endpoint
    const formSpreeEndpoint = 'https://formspree.io/f/xgegwlwn';

    // Send data to Formspree
    const response = await fetch(formSpreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Handle the response (optional)
    const result = await response.json();
    console.log(result);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      date: '',
      destination: '',
      message: '',
    });
  };

  const openclosemenu = () => {
    setOpenmenu(!Openmenu)
  }

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    switch (selectedLanguage) {
      case '1':
        i18n.changeLanguage('en');
        break;
      case '2':
        i18n.changeLanguage('ar');
        break;
      case '3':
        i18n.changeLanguage('fr');
        break;
      case '4':
        i18n.changeLanguage('it');
        break;
      case '5':
        i18n.changeLanguage('ru'); // Russian
        break;
      case '6':
        i18n.changeLanguage('ch'); // Chinese
        break;
      default:
        // Handle default case or do nothing
        break;
    }
  };

  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = () => {

    scroll.scrollTo('test2', {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
    });
  };

  const scrollTo3 = () => {
    scroll.scrollTo('test3', {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
    });
  };

  const scrollTo4 = () => {
    scroll.scrollTo('test4', {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
    });
  };

  const scrollTo5 = () => {
    scroll.scrollTo('test5', {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
    });
  };

  const scrollTo6 = () => {
    scroll.scrollTo('test6', {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
    });
  };

  const scrollTo7 = () => {
    scroll.scrollTo('test7', {
      spy: true,
      smooth: true,
      offset: 50,
      duration: 500,
    });
  };



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsivereviews = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsFlagSet(true);
    }, 2000);

    // Cleanup function to clear the timer in case the component unmounts before 3 seconds
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position as a percentage of the total scroll height
      const scrollPosition = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Update the state based on the scroll position
      setIsScrolled(scrollPosition >= 10);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      {isFlagSet != false ?
        <div className='col-md-12 overflow_stop '>
          <Head>
            <title>Sun And Sea Jetski Dubai</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='col-md-12' name="test1" >

            <div className='col-md-12'>
              <a className='btn btn-success rounded-circle button_position_whats' href="https://wa.me/+971581986276" target="_blank">
                <FaWhatsapp className='text_whatsapp' />
              </a>
              <Link
                activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={scrollToTop}
              >
                {isScrolled === false ? null :
                  <a className='btn btn-success rounded-circle button_position_whats12' >
                    <FaArrowUp className='text_whatsapp' />
                  </a>}
              </Link>
            </div>



            {/* Menu mobile ----------------------------------------------------------------------------------- */}
            <div className='col-md-12 background_header1 menu_mob py-2 px-2'>
              <div className='row'>
                <div className='col-md-6 col-6'>
                  <span className=''>
                    <a href='https://www.facebook.com/profile.php?viewas=100000686899395&id=61554693967567' target='_blank'>
                      <button className='btn btn-outline-light btn-md rounded-circle'><FaFacebookF  /></button>
                    </a>
                  </span>
                  <span className='ms-2'>
                    <a href='https://www.instagram.com/sunandsea_jetski_dubai/?igshid=YzVkODRmOTdmMw%3D%3D' target='_blank'>
                      <button className='btn btn-outline-light btn-md ms-md-2 rounded-circle'><FaInstagram  /></button>
                    </a>
                  </span>
                  <span className='ms-2'>
                    <a href='https://www.youtube.com/@sunandsea_jetski_dubai' target='_blank'>
                      <button className='btn btn-outline-light btn-md ms-md-2 rounded-circle'><FaYoutube /></button>
                    </a>
                  </span>
                </div>
                <div className='col-md-6 col-6 m-auto'>
                  <select
                    className="form-select form-select-sm rounded-pill background_white_t"
                    aria-label="Select Language"
                    onChange={handleLanguageChange}
                  >
                    <option className='color_d_font'>Select Language</option>
                    <option className='color_d_font' value={1}>English</option>
                    <option className='color_d_font' value={2}>Arabic</option>
                    <option className='color_d_font' value={3}>French</option>
                    <option className='color_d_font' value={4}>Italian</option>
                    <option className='color_d_font' value={5}>Russian</option>
                    <option className='color_d_font' value={6}>Chinese</option>
                  </select>
                </div>
              </div>

            </div>
            <div className='col-md-12 menu_mob py-md-2 px-md-3'>
              <div className='row bg-white py-2 px-3 '>
                <div className='col-md-2 col-2'>
                  <img className='img-fluid img_width_one' src='/img/logo.webp' />
                </div>
                <div className='col-md-6 col-8 m-auto ps-0'>
                  <h1 className='text-green margin_bottom_neg_header'>{t("logo_pc")}</h1>
                  <small className='padding_left_new'><span className='small_dubai text-green '> {t("logo_pc_1")} </span></small>
                </div>
                <div className='col-md-6 col-2 text-end m-auto'>
                  <button className='btn btn-success button_green' onClick={openclosemenu} ><AiOutlineMenu /></button>
                </div>
              </div>
            </div>

            {Openmenu ?
              <div className='col-md-12 bg-white position_of_div '>
                <div className='col-md-12 px-4 py-3'>
                  <div className='row'>
                    <div className='col-md-6 col-6'>
                      <p className='m-0 p-0 color_text_mob_header'><b>Home</b></p>
                    </div>
                    <div className='col-md-6 col-6 text-end'><FaAngleRight className='text-green' /></div>
                  </div>
                </div>
                <hr className='m-0 p-0 background_line' />
                <div className='col-md-12 px-4 py-3'>
                  <div className='row'>
                    <div className='col-md-6 col-6' >
                      <Link
                        activeClass="active"
                        to="test2"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={scrollTo}
                      >
                        <p className='m-0 p-0 color_text_mob_header' onClick={openclosemenu} ><b>About us</b></p>
                      </Link>
                    </div>
                    <div className='col-md-6 col-6 text-end'><FaAngleRight className='text-green' /></div>
                  </div>
                </div>
                <hr className='m-0 p-0 background_line' />
                <div className='col-md-12 px-4 py-3'>
                  <div className='row'>
                    <div className='col-md-6 col-6'>
                      <Link
                        activeClass="active"
                        to="test3"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={scrollTo}
                      >
                        <p className='m-0 p-0 color_text_mob_header' onClick={openclosemenu}><b>Gallery</b></p>
                      </Link>
                    </div>
                    <div className='col-md-6 col-6 text-end'><FaAngleRight className='text-green' /></div>
                  </div>
                </div>
                <hr className='m-0 p-0 background_line' />
                <div className='col-md-12 px-4 py-3'>
                  <div className='row'>
                    <div className='col-md-6 col-6'>
                      <Link
                        activeClass="active"
                        to="test4"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={scrollTo}
                      >
                        <p className='m-0 p-0 color_text_mob_header' onClick={openclosemenu}><b>Packages</b></p>
                      </Link>
                    </div>
                    <div className='col-md-6 col-6 text-end'><FaAngleRight className='text-green' /></div>
                  </div>
                </div>
                <hr className='m-0 p-0 background_line' />
                <div className='col-md-12 px-4 py-3'>
                  <div className='row'>
                    <div className='col-md-6 col-6'>
                      <Link
                        activeClass="active"
                        to="test5"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={scrollTo}
                      >
                        <p className='m-0 p-0 color_text_mob_header' onClick={openclosemenu}><b>Testimonials</b></p>
                      </Link>
                    </div>
                    <div className='col-md-6 col-6 text-end'><FaAngleRight className='text-green' /></div>
                  </div>
                </div>
                <hr className='m-0 p-0 background_line' />
                <div className='col-md-12 px-4 py-3'>
                  <div className='row'>
                    <div className='col-md-6 col-6'>
                      <Link
                        activeClass="active"
                        to="test6"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={scrollTo}
                      >
                        <p className='m-0 p-0 color_text_mob_header' onClick={openclosemenu}><b>Contact us</b></p>
                      </Link>
                    </div>
                    <div className='col-md-6 col-6 text-end'><FaAngleRight className='text-green' /></div>
                  </div>
                </div>
              </div>
              : null
            }

            {/* Header one ---------------------------------------------------------- */}
            <div className='col-md-12 background_header1 px-4 py-2'>
              <div className='row '>
                <div className='col-md-8 m-auto'>
                  <div className='flex_using_head'>
                    <p className='m-0 p-0'> <FaMapMarkerAlt /> <small>{t("header2_1")}</small>
                    </p>
                    <p className='m-0 p-0 ps-md-3'> <IoIosCall /> <small>+971581986276</small>
                    </p>
                  </div>
                </div>
                <div className='col-md-4 text-end'>
                  <span>
                    <a href='https://www.facebook.com/profile.php?viewas=100000686899395&id=61554693967567' target='_blank'>
                      <button className='btn btn-outline-light btn-sm rounded-circle'><FaFacebookF /></button>
                    </a>
                  </span>
                  <span>
                    <a href='https://www.instagram.com/sunandsea_jetski_dubai/?igshid=YzVkODRmOTdmMw%3D%3D' target='_blank'>
                      <button className='btn btn-outline-light btn-sm ms-md-2 rounded-circle'><FaInstagram /></button>
                    </a>
                  </span>
                  <span>
                    <a href='https://www.youtube.com/@sunandsea_jetski_dubai' target='_blank'>
                      <button className='btn btn-outline-light btn-sm ms-md-2 rounded-circle'><FaYoutube /></button>
                    </a>
                  </span>
                  {/* <span><button className='btn btn-outline-light btn-sm ms-md-2 rounded-circle'><FaXTwitter /></button></span> */}
                </div>
              </div>
            </div>

            {/* Header 2 ------------------------------------------------------------- */}



            <div className='col-md-12 position_parent_hero'>
              <div className='col-md-12 position_child'>
                <video loop autoPlay muted className="vedioPlayer">
                  <source
                    src="/video/jetskiu.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className='col-md-12 position_new '>
                <div className='col-md-12 header_2 display_pc px-4'>
                  <div className='row'>
                    <div className='col-md-5 pb-2'>
                      <div className='row'>
                        <div className='col-md-2 pe-0 pt-1 '>
                          <img className='img-fluid img_width_one' src='/img/logo.webp' />
                        </div>
                        <div className='col-md-10 pt-3'>
                          <h1 className='text-green margin_bottom_neg_header'>{t("logo_pc")}</h1>
                          <small className='padding_left_new'><span className='small_dubai '> {t("logo_pc_1")} </span></small>
                        </div>
                      </div>

                    </div>
                    <div className='col-md-7  pt-4'>
                      <div className='col-md-12 flex_using_head_j pt-2'>
                        <p className='font_set_new mt-2'>{t("nav1")}</p>
                        <p className='font_set_new mt-2'>
                          <Link
                            activeClass="active"
                            to="test2"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={scrollTo}
                          >
                            {t("nav2")}
                          </Link>
                        </p>
                        <p className='font_set_new mt-2'>
                          <Link
                            activeClass="active"
                            to="test3"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={scrollTo3}
                          >
                            {t("nav3")}
                          </Link>
                        </p>
                        <p className='font_set_new mt-2'>
                          <Link
                            activeClass="active"
                            to="test4"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={scrollTo4}
                          >
                            {t("nav4")}
                          </Link>
                        </p>
                        <p className='font_set_new mt-2'>
                          <Link
                            activeClass="active"
                            to="test5"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={scrollTo3}
                          >
                            {t("nav5")}
                          </Link>
                        </p>
                        <p className='font_set_new mt-2'>
                          <Link
                            activeClass="active"
                            to="test6"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={scrollTo3}
                          >
                            {t("nav6")}
                          </Link>
                        </p>
                        <p className='font_set_new'>
                          <select
                            className="form-select rounded-pill background_white_t"
                            aria-label="Select Language"
                            onChange={handleLanguageChange}
                          >
                            <option className='color_d_font'>Select Language</option>
                            <option className='color_d_font' value={1}>English</option>
                            <option className='color_d_font' value={2}>Arabic</option>
                            <option className='color_d_font' value={3}>French</option>
                            <option className='color_d_font' value={4}>Italian</option>
                            <option className='color_d_font' value={5}>Russian</option>
                            <option className='color_d_font' value={6}>Chinese</option>
                          </select>

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12  pb-3 pt-2'>
                  <div className='col-md-12 text-center padding_custom_top'>
                    <h1 className='color_white_new'>{t('welcome')}</h1>
                    <p className="fs-4 text-white mb-4 animated slideInDown mt-3">{t("sub_welcome")}</p>
                  </div>

                </div>
              </div>
            </div>


            <div className='col-md-12 padding_left_right_custom paddin_top_other mb-5 margin-top_custom pb-4'>
              <Element name="test2">
                <div className='row'>
                  <div className='col-md-6 mt-md-0 mt-4'>
                    <img class="img-fluid img_width_set" src="/img/new.webp" />
                  </div>
                  <div className='col-md-6 mt-4 m-md-auto'>
                    <h1 className='section_1_t'><b>{t("About1")}</b></h1>
                    <p>
                      {t("para_about")}
                    </p>
                    <p>
                      {t("para2_about")}
                    </p>

                  </div>
                </div>
              </Element>
            </div>

            <div className='col-md-12 text-center'>
              <Element name="test3">
                <h1 className='section_1_t'><b>{t("Gallery")}</b></h1>
              </Element>
            </div>
            <div className='col-md-12 padding_left_right_custom mb-5 pb-4 mt-5'>
              <Carousel responsive={responsive}
                autoPlay={true}
                keyBoardControl={true}
                infinite={true}
                autoPlaySpeed={2000}>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g2.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g3.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g5.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g7.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g16.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g9.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g17.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g11.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g18.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g13.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g14.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g15.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g8.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g10.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g12.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g21.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g22.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g23.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g24.webp' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g25.webp' />
                  </div>
                </div>

              </Carousel>

            </div>
            <div className='col-md-12 text-center'>
              <Element name="test4">
                <h1 className='section_1_t'><b>{t("Packages1")}</b></h1>
              </Element>
            </div>
            <div className='col-md-12  mt-5 mb-5 pb-4 padding_left_right_custom'>
              <div className='row'>
                <div className='col-md-4 mt-md-0  '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/ski.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />  {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><TbTimeDuration30 className='text-green' />{t("min30")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Jetski Tour</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 300<span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p1_des")}<br /> {t("p2_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/ski2.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")} </small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />  {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' /> {t("min60")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Jetski Tour</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 500<span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p3_des")}<br /> {t("p4_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/g26.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />  {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' /> {t("min120")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Jetski Tour</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 1000 <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p5_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/d1.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 1600 <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p14_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/d2.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min")} </small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Scuba Diving</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 500  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p15_des")} <br /> {t("p16_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/d3.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min")} </small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Scuba Diving</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 600  <span className='font_size_small_from'>  {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p17_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/g17.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min20")} </small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Jetcar Tour</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 600  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p10_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/skicar.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min30")} </small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Jetcar Tour</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 800  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p11_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/fly.webp' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' /> {t("p13_des")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Flyboard </h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 300  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p12_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/yacht.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-6 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-6 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Yacht Tour </h4>
                        {/* <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> -  <span className='font_size_small_from'> {t("Currency")}</span> </h3> */}
                      </div>
                      <div className='col-md-12 pt-2 mt-4 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p18_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/parasail.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-6 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-6 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Parasailing</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 300  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t('p19_des')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/bal.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-6 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-6 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Parasailing</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 500  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p21_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/fish.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />4 hours</small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Deep See Fishing</h4>
                        {/* <h3 className=' color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 1600  <span className='font_size_small_from'> {t("Currency")}</span> </h3> */}
                      </div>
                      <div className='col-md-12 text-center  mt-2'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p20_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/car.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      {/* <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' /> {t("Time")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' /> Desert safari </small>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Desert Safari</h4>
                        <h3 className='pt-2 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 150  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
                      </div>
                      <div className='col-md-12 text-center'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          {t("p22_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/dount.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 text-center '>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Donut Ride</h4>
                        {/* <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 150  <span className='font_size_small_from'> {t("Currency")}</span> </h3> */}
                      </div>
                      <div className='col-md-12 text-center pt-2 mt-4'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          Donut Ride
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-4 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr height_w_img' src='/img/banana.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 text-center'>
                        <h4 className='pt-4  m-0 p-0 color_new_text2'>Banana Ride</h4>
                        {/* <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 150  <span className='font_size_small_from'> {t("Currency")}</span> </h3> */}
                      </div>
                      <div className='col-md-12 text-center mt-2 pt-4'>
                        <span><FaStar className='text-green' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                        <span><FaStar className='text-green ms-1' /></span>
                      </div>
                      <div className='col-md-12 text-center px-3 mt-3'>
                        <p className='m-0 p-0'>
                          Banana Ride
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className='col-md-12 text-center'>
              <Element name="test7">
                <h1 className='section_1_t'><b>{t("Schedule")}</b></h1>
              </Element>
            </div>
            <div className='col-md-12 padding_left_right_custom mt-5 mb-5 pb-4 '>
              <div className='row'>
                <div className='col-md-6'>
                  <button className='btn btn-outline-success border_new_sch w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Monday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                  <button className='btn btn-outline-success border_new_sch mt-4 w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Tuesday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                  <button className='btn btn-outline-success border_new_sch mt-4 w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Wednesday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                  <button className='btn btn-outline-success border_new_sch mt-4 w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Thursday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                  <button className='btn btn-outline-success border_new_sch mt-4 w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Friday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                  <button className='btn btn-outline-success border_new_sch mt-4 w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Saturday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                  <button className='btn btn-outline-success border_new_sch mt-4 w-100'>
                    <div className='row'>
                      <div className='col-6 text-start'>
                        {t("Sunday")}
                      </div>
                      <div className='col-6 text-end'>
                        {t("S1")}
                      </div>
                    </div>
                  </button>
                </div>
                <div className='col-md-6 mt-5 m-md-auto'>
                  <img className='img-fluid' src='/img/sch.webp' />
                </div>
              </div>
            </div>
            <div className='col-md-12 text-center'>
              <Element name="test5">
                <h1 className='section_1_t'><b>{t("c_rev")}</b></h1>
              </Element>
            </div>
            <div className='col-md-12 padding_left_right_custom mb-5 pb-4 mt-5'>
              <Carousel responsive={responsivereviews}
                autoPlay={true}
                keyBoardControl={true}
                infinite={true}
                autoPlaySpeed={2000}>
                <div className='px-2'>
                  <div className='col-md-12 text-center'>
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b1.webp' />
                  </div>
                  <div className='col-md-12 px-2 text-center border_circle'>
                    <p className='mb-0 mt-5 color_bck'>Tom Adamson</p>
                    <div className='col-md-12 text-center'>
                      <span><FaStar className='text-green' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                    </div>
                    <div className='col-md-12 text-center px-5'>
                      <hr className='line_white' />
                    </div>
                    <div className='col-md-12 pt-3 pb-2'>
                      <p>{t("review1")}</p>
                    </div>
                  </div>
                </div>
                <div className='px-2'>
                  <div className='col-md-12 text-center'>
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b3.webp' />
                  </div>
                  <div className='col-md-12 px-2 text-center border_circle'>
                    <p className='mb-0 mt-5 color_bck'>Rajiv Shah</p>
                    <div className='col-md-12 text-center'>
                      <span><FaStar className='text-green' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                    </div>
                    <div className='col-md-12 text-center px-5'>
                      <hr className='line_white' />
                    </div>
                    <div className='col-md-12 pt-3 pb-2'>
                      <p>{t("review2")}</p>
                    </div>
                  </div>
                </div>
                <div className='px-2'>
                  <div className='col-md-12 text-center'>
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b2.webp' />
                  </div>
                  <div className='col-md-12 px-2 text-center border_circle'>
                    <p className='mb-0 mt-5 color_bck'>Jeffrey blok</p>
                    <div className='col-md-12 text-center'>
                      <span><FaStar className='text-green' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                    </div>
                    <div className='col-md-12 text-center px-5'>
                      <hr className='line_white' />
                    </div>
                    <div className='col-md-12 pt-3 pb-2'>
                      <p>{t("review3")}</p>
                    </div>
                  </div>
                </div>
                <div className='px-2'>
                  <div className='col-md-12 text-center'>
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b4.webp' />
                  </div>
                  <div className='col-md-12 px-2 text-center border_circle'>
                    <p className='mb-0 mt-5 color_bck'>Katie Edwards</p>
                    <div className='col-md-12 text-center'>
                      <span><FaStar className='text-green' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                      <span><FaStar className='text-green ms-1' /></span>
                    </div>
                    <div className='col-md-12 text-center px-5'>
                      <hr className='line_white' />
                    </div>
                    <div className='col-md-12 pt-3 pb-2'>
                      <p>{t("review4")}</p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className='col-md-12 padding_left_right_custom mb-5 pb-4 display_pc'>
              <div className='d_flex_flag px-3 '>

                <img className='img-fluid width_flag mt-5' src='/img/uae.webp' />
                <img className='img-fluid width_flag mt-5' src='/img/pakistan.webp' />
                <img className='img-fluid width_flag mt-5' src='/img/france.webp' />
                <img className='img-fluid width_flag mt-5' src='/img/morocco.webp' />
                <img className='img-fluid width_flag mt-5' src='/img/algeria.webp' />
                <img className='img-fluid width_flag mt-5' src='/img/tunisia.webp' />
                <img className='img-fluid width_flag mt-5' src='/img/russia.webp' />

              </div>
            </div>

            <div className='col-md-12 padding_left_right_custom mb-5 pb-4 display_mob'>
              <div className='row'>
                <div className='col-md-6 col-6'>
                  <img className='img-fluid mt-5' src='/img/uae.webp' />
                </div>
                <div className='col-md-6 col-6'>
                  <img className='img-fluid mt-5' src='/img/pakistan.webp' />
                </div>
                <div className='col-md-6 col-6'>
                  <img className='img-fluid mt-5' src='/img/france.webp' />
                </div>
                <div className='col-md-6 col-6'>
                  <img className='img-fluid mt-5' src='/img/morocco.webp' />
                </div>
                <div className='col-md-6 col-6'>
                  <img className='img-fluid mt-5' src='/img/algeria.webp' />
                </div>
                <div className='col-md-6 col-6'>
                  <img className='img-fluid mt-5' src='/img/tunisia.webp' />
                </div>
                <div className='col-md-12 col-12 text-center '>
                  <img className='img-fluid img_falg_width_set mt-5' src='/img/russia.webp' />
                </div>
              </div>
            </div>



            <div className='col-md-12 text-center'>
              <Element name='test9' >
                <h1 className='section_1_t'><b>{t("g_map")}</b></h1>
              </Element>
            </div>
            <div className="elfsight-app-3f8bce26-7b34-4501-ade2-16858a93181c" data-elfsight-app-lazy></div>
            <div className='col-md-12 padding_left_right_custom mt-5 mb-5 pb-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15956.785608727221!2d55.18518749178701!3d25.143439188456263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA5JzA5LjIiTiA1NcKwMTEnNTQuMCJF!5e0!3m2!1sen!2s!4v1702723801409!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Element name='test6' >
              <div className='col-md-12  text-center'>
                <h1 className='section_1_t'><b>{t("nav6")}</b></h1>
              </div>
            </Element>
            <div className='col-md-12 padding_left_right_custom mb-5 pb-4'>
              <div className='col-md-12 background_new_2 mt-5 px-md-5 px-3 py-5'>
                <div className='row'>
                  <div className='col-md-6 u_font'>
                    <h1 className='text-white'><b>{t("Online_b")}</b></h1>
                    <p className='text-white'>
                      {t("booking_para1")}
                    </p>
                    <p className='text-white'>
                      {t("booking_para2")}
                    </p>
                  </div>
                  <div className='col-md-6 u_font'>
                    <h1 className='text-white '><b>{t("book_a_tour")}</b></h1>
                    <div className='col-md-12 mt-4'>
                      <form onSubmit={handleSubmit}>
                        <div className='row'>
                          <div className='col-md-6'>
                            <input required className='form-control input_deign form-control-lg' type='text' name="name" value={formData.name} onChange={handleChange} placeholder={t("name")} />
                          </div>
                          <div className='col-md-6 mt-md-0 mt-4'>
                            <input required className='form-control input_deign form-control-lg' type='text' name="email" value={formData.email} onChange={handleChange} placeholder={t("email")} />
                          </div>
                          <div className='col-md-6 mt-4'>
                            <input required className='form-control input_deign form-control-lg' type='date' name="date" value={formData.date} onChange={handleChange} placeholder={t("date")} />
                          </div>
                          <div className='col-md-6 mt-4'>
                            <input required className='form-control input_deign form-control-lg' type='text' name="destination" value={formData.destination} onChange={handleChange} placeholder={t("destination")} />
                          </div>
                          <div className='col-md-12 mt-4'>
                            <textarea required className='form-control input_deign form-control-lg' name="message" value={formData.message} onChange={handleChange} type='text' placeholder={t("special_request")} ></textarea>
                          </div>
                          <div className='col-md-12'>
                            <button type='submit' className='btn btn-outline-light border_radius_n w-100 mt-4 py-3'> {t("book_now")} </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 padding_left_right_custom pt-5 pb-5  bg_footer'>
              <div className='row pt-4'>
                <div className='col-md-3 mt-md-0 mt-3 display_mob'>
                  <h4 className='text-white'><b>Phone</b></h4>

                  <h6 className='text-white'> <FaPhoneAlt /> +971581986276</h6>
                  <a href='mailto:sunandseajetski@gmail.com' className='text-white'>
                  <h6 className='text-white'> <IoIosMail /> sunandseajetski@gmail.com</h6>
                  </a>


                </div>
                <div className='col-md-3 mt-3 mt-md-0'>
                  <div className='col-md-12'>
                    <h4 className='text-white'><b>Company</b></h4>
                    <Link
                      activeClass="active"
                      to="test2"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={scrollTo}
                    >
                      <h6 className='text-white'><FaAngleRight />{t("nav2")}</h6>
                    </Link>
                    <Link
                      activeClass="active"
                      to="test3"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={scrollTo}
                    >
                      <h6 className='text-white'> <FaAngleRight />{t("nav3")}</h6>
                    </Link>
                    <Link
                      activeClass="active"
                      to="test4"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={scrollTo}
                    >
                      <h6 className='text-white'> <FaAngleRight />Awesome Packages</h6>
                    </Link>
                    <Link
                      activeClass="active"
                      to="test5"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={scrollTo}
                    >
                      <h6 className='text-white'> <FaAngleRight />{t("nav5")}</h6>
                    </Link>
                  </div>

                </div>
                <div className='col-md-3 mt-md-0 mt-3'>
                  <h4 className='text-white'><b>Contact</b></h4>
                  <Link
                    activeClass="active"
                    to="test6"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={scrollTo}
                  >
                    <h6 className='text-white'> <FaAngleRight />{t("nav6")}</h6>
                  </Link>
                  <Link
                    activeClass="active"
                    to="test5"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={scrollTo}
                  >
                    <h6 className='text-white'> <FaAngleRight />Customer Reviews</h6>
                  </Link>
                  <Link
                    activeClass="active"
                    to="test7"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={scrollTo}
                  >
                    <h6 className='text-white'> <FaAngleRight />Schedule</h6>
                  </Link>
                </div>
                <div className='col-md-3 mt-md-0 mt-3'>
                  <h4 className='text-white'><b>Location</b></h4>
                  <Link
                    activeClass="active"
                    to="test9"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={scrollTo}
                  >
                    <h6 className='text-white'> <FaAngleRight />Maps</h6>
                  </Link>
                </div>

              </div>
            </div>
            <div className='col-md-12 text-center backgroundcopyfooter'>
              {t("copyrights")}
            </div>
          </div>
        </div>
        :
        <div className='col-md-12 text-center pt-5 mt-5'>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    </>
  )
}
