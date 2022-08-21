import './Main.css';
import SmallArticle from '../SmallArticle';
import SmallCourse from '../SmallCourse';
import NewCourse from '../NewCourse';
import img from "../../img/mainImg.png"
import mouse from "../../img/mouse.png"
import reas1 from "../../img/reas1.png"
import reas2 from "../../img/reas2.png"
import reas3 from "../../img/reas3.png"
import bell from "../../img/bell.png"
import backImg from "../../img/mainPicBehind.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Main() {
  return (
            <div className='mainShell'>
                <section id="headMain">
                    <div id="leftHeadMain">
                        <h1>
                            <span className='orangeSpan'>ITifico</span> — платформа для вашого вивчення коду
                        </h1>
                        <div id="mainDesc">
                            Курси для початківців і просунутих програмістів, а також цікаві статті. Приєднуйтесь і дозвольте нам підтримати вас у вашій кар’єрі
                        </div>
                        <div style={{display:"flex"}}>
                            <button className='normalBut'>
                                Call to action <span className='bigArrow'>🠒</span>
                            </button>
                            <img id="mainPicBehind" src={backImg} alt="{/}">

                            </img>
                        </div>
                        
                        <div id="scrollDown">
                            <img src={mouse} alt="" srcset="" />
                            <div>Гортай вниз</div>
                            <div id="line"></div>
                        </div>
                    </div>
                    <img id="mainImg" src={img} alt="" />
                </section>
                <section id="mainArticles">
                    <div id="articlesTop">
                        <h1 className='mainH1'>Статті</h1>
                        <button className='whiteBut'>Більше статей</button>
                    </div>
                    <div id="articlesBottom">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation
                            pagination={{ clickable: true }}
                            bulletElement={"div"}
                        >
                            <SwiperSlide>
                                <SmallArticle/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SmallArticle/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SmallArticle/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SmallArticle/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SmallArticle/>
                            </SwiperSlide>
                        </Swiper>
                            
                    </div>
                </section>
                <section id="mainCourses">
                    <div id="articlesTop">
                        <h1 className='mainH1'>Курси</h1>
                        <button className='whiteBut'>Всі курси</button>
                    </div>
                    <div id="articlesBottom">
                        <Swiper
                            id="courseSwiper"
                            slidesPerView={2}
                            spaceBetween={30}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <SmallCourse/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewCourse/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SmallCourse/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section id="reasons">
                        <h1>Чому програмувати це круто</h1>
                        <div id="reasWrapper">
                                <div className='reason'>
                                    <img src={reas1} alt="" />
                                    <h3>Ви можете реалізовувати свої ідеї за допомогою коду</h3>
                                </div>
                                <div className='reason'>
                                    <img src={reas2} alt="" />
                                    <h3>Ви можете кодувати будь-де</h3>
                                </div>
                                <div className='reason'>
                                    <img src={reas3} alt="" />
                                    <h3>Програмісти затребувані скрізь</h3>
                                </div>
                        </div>
                </section>
                <section id="mainForm">
                    <h1 className='mainH1'>Кодування ніколи не було простіше!</h1>
                    <p>Не хочете пропускати жодних новин, тоді підпишіться на нашу розсилку.</p>
                    <div>
                        <input placeholder="Повне ім'я" type="text" />
                        <input placeholder='Ваша Email адреса' type="text" />
                        <button className='normalBut'>
                            Підписатися <img src={bell} alt="" srcset="" />
                        </button>
                    </div>
                </section>
            </div>
  );
}

export default Main;