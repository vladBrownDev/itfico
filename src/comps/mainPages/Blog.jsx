import './Blog.css';
import home from "../../img/homeIcon.png"
import navArrow from "../../img/navArrow.png"
import { Link } from 'react-router-dom';
import SmallArticle from "../SmallArticle"
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Blog() {  
  function loadPages () {
    let dots = Array.from(document.querySelectorAll("#blogMain .swiper-pagination-bullet"))
    dots.map((el,num) => {
      el.innerHTML = String(num + 1)
      return el
    })
  }
  loadPages()
  window.onload = function () {
    setInterval (loadPages, 200)
  }
  return (
    <section id="blog">
        <div className='smallNavbar'>
              <img src={home} alt="" />
              <Link to="/">Головна</Link>
              <img src={navArrow} alt="" />
              <div>Блог</div>
        </div>
        <div id="blogMain">
            <h1>Блог</h1>
            <div id="blogDownHeader">
              <div id="blogTags">
                <div className='blogTag'>Frontend</div>
                <div className='blogTag'>Frontend</div>
                <div className='blogTag'>Frontend</div>
                <div className='blogTag'>Frontend</div>
                <div className='blogTag'>Frontend</div>
              </div>
              <select id="blogSort" name="select">
                  <option disabled selected value="value1">Сортувати за:</option>
                  <option value="value2">Переглядам</option>
                  <option value="value3">Репостам</option>
              </select>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}>
              <SwiperSlide>
                <div id="pagArticles">
                  <Link to="/article">
                    <SmallArticle/>
                  </Link>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div id="pagArticles">
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                  <SmallArticle/>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Blog