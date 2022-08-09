import './BigArticle.css';
import home from "../../img/homeIcon.png"
import navArrow from "../../img/navArrow.png"
import calendar from "../../img/orangeCalendar.png"
import eye from "../../img/orangeEye.png"
import bigpic from "../../img/articleBig.png"
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SmallArticle from "../SmallArticle";
import SmallerCourse from '../SmallerCourse';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../../img/articles/small1.png"
import img2 from "../../img/articles/smal2.png"
import img3 from "../../img/articles/small3.png"
import img4 from "../../img/articles/small4.png"
import img5 from "../../img/articles/small5.png"
import coffee from "../../img/buyCoffeeBut.png"
import csharp from "../../img/csharp.png"


function BigArticle() {
  return (
        <section id="bigArticle">
            <div id="leftArticle">
                <div className='smallNavbar' >
                <img src={home} alt="" />
                <Link to="/">Головна</Link>
                <img src={navArrow} alt="" />
                <Link to="/blog">Блог</Link>
                <img src={navArrow} alt="" />
                <div>Наскільки ефективне навчання з дрібницями на утримання та результати</div>
                </div>
                <h1>
                    Наскільки ефективне навчання з дрібницями на утримання та результати
                </h1>
                <div className='views'>
                    <img src={calendar} alt="" />
                    <div>16.01.2020</div>
                    <img className='eyeImg' src={eye} alt="" />
                    <div>48</div>
                </div>
                <img className='bigPic' src={bigpic} alt="" />
                <h2 className='articleH2'>Які можуть виникнути проблеми?</h2>
                <ul className='articleUl'>
                    <li>Ідейні міркування вищого порядку, а також подальший розвиток </li>
                    <li>Різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, </li>
                    <li>Займаних учасниками щодо поставлених завдань. </li>
                    <li>Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки </li>
                </ul>
                <p>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних учасниками щодо поставлених завдань. Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки істотних фінансових і адміністративних умов. Не слід, однак забувати, що рамки і місце навчання кадрів вимагають від нас аналізу форм розвитку. Значимість цих проблем настільки очевидна, що консультація </p>
                <h2>Які можуть виникнути проблеми?</h2>
                <ol className='articleOl'>
                    <li>Ідейні міркування вищого порядку, а також подальший розвиток </li>
                    <li>Різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, </li>
                    <li>Займаних учасниками щодо поставлених завдань. </li>
                    <li>Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки </li>
                </ol>
                <div className='imagesCont'>
                        <div>
                            <img src={img1} alt="" />
                            <p>Коментар до зображення</p>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                            <p>Коментар до зображення</p>
                        </div>
                </div>
                <p>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних учасниками щодо поставлених завдань. Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки істотних фінансових і адміністративних умов. Не слід, однак забувати, що рамки і місце навчання кадрів вимагають від нас аналізу форм розвитку. Значимість цих проблем настільки очевидна, що консультація </p>
                <div className='imagesCont'>
                        <div>
                            <img src={img3} alt="" />
                            <p>Коментар до зображення</p>
                        </div>
                        <div>
                            <img src={img4} alt="" />
                            <p>Коментар до зображення</p>
                        </div>
                        <div>
                            <img src={img5} alt="" />
                            <p>Коментар до зображення</p>
                        </div>
                </div>
                <p>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних учасниками щодо поставлених завдань. Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки істотних фінансових і адміністративних умов. Не слід, однак забувати, що рамки і місце навчання кадрів вимагають від нас аналізу форм розвитку. Значимість цих проблем настільки очевидна, що консультація </p>
                <div className='quotesImg'></div>
                <div className='quotation'>
                    <h4>Звенигород Станіславський</h4>
                    <div>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних </div>
                </div>
                <p>Ідейні міркування вищого порядку, а також подальший розвиток різних форм діяльності забезпечує широкому колу (фахівців) участь у формуванні позицій, займаних учасниками щодо поставлених завдань. Завдання організації, особливо ж консультація з широким активом є цікавий експеримент перевірки істотних фінансових і адміністративних умов. Не слід, однак забувати, що рамки і місце навчання кадрів вимагають від нас аналізу форм розвитку. Значимість цих проблем настільки очевидна, що консультація </p>
                <div className='shareBlock'>
                        <div className="leftShare">
                            <div>Поділитися:</div>
                            <span className='shareFacebook'></span>
                            <span className='shareTwitter'></span>
                            <span className='shareLinkedin'></span>
                        </div>
                        <img src={coffee} alt="" srcset="" />
                </div>
                <div className='articleSwitch'>
                    <div className='leftArtSwitch'>
                        <span className='switchArr'>🠐</span>
                        <span>Попередня стаття</span>
                    </div>
                    <div className='rightArtSwitch'>
                        <span>Наступна стаття</span>
                        <span className='switchArr'>🠒</span> 
                    </div>
                </div>
                <section id="bigArtArticles">
                    <div id="articlesTop">
                        <h1 className='mainH1'>Інші статті</h1>
                        <button className='whiteBut'>Більше статей</button>
                    </div>
                    <div id="articlesBottom">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation
                            pagination={{ clickable: true }}
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
            </div>
            <div id="rightArticle">
                <section className='rightArticleSection'>
                        <h3>Категорії</h3>
                        <div id="rightArtTags">
                            <span className='blogTag'>Frontend</span>
                            <span className='blogTag' style={{backgroundColor:"#A1D8FF"}}>Python</span>
                            <span className='blogTag' style={{backgroundColor:"#BEC5FF"}}>C#</span>
                            <span className='blogTag'>Frontend</span>
                            <span className='blogTag'>Frontend</span>
                            <span className='blogTag'>Frontend</span>
                            <span className='blogTag'>Frontend</span>
                        </div>
                </section>
                <section className='rightArticleSection'>
                    <h3>Курси</h3>
                    <SmallerCourse
                    color="#CCC1F6"
                    head="C# від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={csharp}/>
                </section>
            </div>
        </section>
  );
}

export default BigArticle;