import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaAngleRight, FaArrowRight, FaArrowUp, FaClock, FaDollarSign, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPlane, FaStar, FaUser, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
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
import { i18n } from '../../next-i18next.config';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isFlagSet, setIsFlagSet] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

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
            <div className='col-md-12 menu_mob py-md-2 px-md-3'>
              <div className='row bg-white py-2 px-3 '>
                <div className='col-md-6 col-10 m-auto'>
                  <h1 className='text-green'>{t("logo_pc")} <br /><span className='small_dubai text-green m-0 p-0'>{t("logo_pc_1")}</span></h1>
                </div>
                <div className='col-md-6 col-2 text-end'>
                  <button className='btn btn-success button_green'><AiOutlineMenu /></button>
                </div>
              </div>
            </div>

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
                  <span><button className='btn btn-outline-light btn-sm rounded-circle'><FaFacebookF /></button></span>
                  <span><button className='btn btn-outline-light btn-sm ms-md-3 rounded-circle'><FaInstagram /></button></span>
                  {/* <span><button className='btn btn-outline-light btn-sm ms-md-2 rounded-circle'><FaYoutube /></button></span>
                  <span><button className='btn btn-outline-light btn-sm ms-md-2 rounded-circle'><FaXTwitter /></button></span> */}
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
              <div className='col-md-12 position_new pt-2'>
                <div className='col-md-12 header_2 px-4'>
                  <div className='row'>
                    <div className='col-md-5 pb-3'>
                      <h1 className='text-green margin_bottom_neg_header'>{t("logo_pc")}</h1>
                      <small className='padding_left_new'><span className='small_dubai '> {t("logo_pc_1")} </span></small>
                    </div>
                    <div className='col-md-7 pt-2'>
                      <div className='col-md-12 flex_using_head_j'>
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
                          >{t("nav2")}
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
                    <img class="img-fluid img_width_set" src="/img/new.jpeg" />
                  </div>
                  <div className='col-md-6 mt-4 m-md-auto'>
                    <h1 className='section_1_t'><b>{t("About1")}</b></h1>
                    <p>
                      {t("para_about")}
                    </p>
                    <p>
                      {t("para2_about")}
                    </p>
                    {/* <div className='row'>
                <div className='col-md-6'>
                  <p className='mb-1' ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                  <p className='mb-1'  ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                  <p className='mb-1' ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                  <p className='mb-1'  ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                </div>
                <div className='col-md-6'>
                  <p className='mb-1' ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                  <p className='mb-1'  ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                  <p className='mb-1' ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                  <p className='mb-1'  ><FaArrowRight className='text-green' />&nbsp; First Class Flights</p>
                </div>
              </div> */}
                    {/* <div className='btn btn-success button_green px-5 py-3 mt-md-1 mt-3'>
                Read More
              </div> */}
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
                    <img className='img-fluid img_border_rad' src='/img/g2.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g3.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g5.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g7.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g16.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g9.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g17.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g11.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g18.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g13.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g14.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g15.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g8.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g10.jpeg' />
                  </div>
                </div>
                <div className='px-3'>
                  <div className='col-md-12'>
                    <img className='img-fluid img_border_rad' src='/img/g12.jpeg' />
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
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/ski.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
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
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 300<span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/ski2.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
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
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 500<span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/ski3.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
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
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 1000 <span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                          {t("p5_des")}{t("p6_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/fam.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />{t("Time2")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min30")}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 300 <span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                          {t("p7_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/fam3.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />{t("Time2")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min60")} </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 500  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                          {t("p8_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/ski6.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />{t("Time2")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min120")} </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>From</small> 1000  <span className='font_size_small_from'> AED</span> </h3>
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
                          {t("p9_des")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/skicar.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />{t("Time2")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min20")} </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 600  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/skicar.jpeg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />{t("Time2")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' />{t("min30")} </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 800  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
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
                <div className='col-md-4 mt-md-0 '>
                  <div className='col-md-12  pb-4 parent_div'>
                    <div className='col-md-12'>
                      <img className='img-fluid img_border_topr' src='/img/fly.jpg' />
                    </div>
                    <div className='col-md-12 bprder_new_r pb-4'>
                      <div className='col-md-12 px-2'>
                        <div className='row px-1 '>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><IoLocationSharp className='text-green' />  {t("Loc")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><FaClock className='text-green' />{t("Time2")}</small>
                            </div>
                          </div>
                          <div className='col-md-4 bprder_new py-1'>
                            <div className='col-md-12 text-center'>
                              <small><GiDuration className='text-green' /> {t("p13_des")}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12 text-center'>
                        <h3 className='pt-4 color_new_text1 mb-0'><small className='font_size_small_from'>{t("From")}</small> 300  <span className='font_size_small_from'> {t("Currency")}</span> </h3>
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


              </div>
            </div>
            <div className='col-md-12 text-center'>
              <Element name="test7">
                <h1 className='section_1_t'><b>{t("Schedule")}</b></h1>
              </Element>
            </div>
            <div className='col-md-12 padding_left_right_custom mt-5 mb-5 pb-4'>
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
                  <img className='img-fluid' src='/img/sch.jpeg' />
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
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b1.jpg' />
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
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b3.jpeg' />
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
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b2.jpeg' />
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
                    <img className='img-fluid img_p_height_w m_top_n rounded-circle' src='/img/b4.jpeg' />
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
            <div className='col-md-12 padding_left_right_custom mb-5 pb-4'>
              <div className='d_flex_flag'>

                <img className='img-fluid width_flag' src='/img/uae.jpg' />
                <img className='img-fluid width_flag' src='/img/pakistan.jpg' />
                <img className='img-fluid width_flag' src='/img/france.jpg' />
                <img className='img-fluid width_flag' src='/img/morocco.jpg' />
                <img className='img-fluid width_flag' src='/img/algeria.jpg' />
                <img className='img-fluid width_flag' src='/img/tunisia.jpg' />
                <img className='img-fluid width_flag' src='/img/russia.jpg' />

              </div>
            </div>
            <div className='col-md-12 text-center'>
              <h1 className='section_1_t'><b>{t("g_map")}</b></h1>
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
                      <div className='row'>
                        <div className='col-md-6'>
                          <input className='form-control input_deign form-control-lg' type='text' placeholder={t("name")} />
                        </div>
                        <div className='col-md-6 mt-md-0 mt-4'>
                          <input className='form-control input_deign form-control-lg' type='text' placeholder={t("email")} />
                        </div>
                        <div className='col-md-6 mt-4'>
                          <input className='form-control input_deign form-control-lg' type='text' placeholder={t("date")} />
                        </div>
                        <div className='col-md-6 mt-4'>
                          <input className='form-control input_deign form-control-lg' type='text' placeholder={t("destination")} />
                        </div>
                        <div className='col-md-12 mt-4'>
                          <textarea className='form-control input_deign form-control-lg' type='text' placeholder={t("special_request")} ></textarea>
                        </div>
                        <div className='col-md-12'>
                          <button className='btn btn-outline-light border_radius_n w-100 mt-4 py-3'> {t("book_now")} </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 padding_left_right_custom pt-5 pb-5  bg_footer'>
              <div className='row pt-4'>
                <div className='col-md-3'>
                  <div className='col-md-12'>
                    <h4 className='text-white'><b>Company</b></h4>
                    <h6 className='text-white'><FaAngleRight />{t("nav2")}</h6>
                    <h6 className='text-white'> <FaAngleRight />{t("nav3")}</h6>
                    <h6 className='text-white'> <FaAngleRight />Awesome Packages</h6>
                    <h6 className='text-white'> <FaAngleRight />{t("nav5")}</h6>
                  </div>

                </div>
                <div className='col-md-3 mt-md-0 mt-3'>
                  <h4 className='text-white'><b>Contact</b></h4>
                  <h6 className='text-white'> <FaAngleRight />{t("nav6")}</h6>
                  <h6 className='text-white'> <FaAngleRight />Customer Reviews</h6>
                  <h6 className='text-white'> <FaAngleRight />Schedule</h6>
                </div>
                <div className='col-md-3 mt-md-0 mt-3'>
                  <h4 className='text-white'><b>Location</b></h4>
                  <h6 className='text-white'> <FaAngleRight />Maps</h6>
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
