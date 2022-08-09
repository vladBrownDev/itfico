import './SmallArticle.css';
import img from "../../src/img/art.png"
import calendar from "../../src/img/calendar.png"
import eye from "../../src/img/eye.png"


function SmallArticle() {
  return (
    <div className='smallArticle'>
        <img src={img} alt="" />
        <div className='artTags'>
                <span>Frontend</span>
        </div>
        <p>
            Наскільки ефективне навчання з дрібницями на утримання та результати
        </p>
        <div className='smallArtDesc'>
            Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...
        </div>
        <div id="line">

        </div>
        <div id="bottomSmallArticle">
                <div>
                    <img src={calendar} className="smallIcon" alt="" srcset=""/>
                    <div>5.05.2022</div>
                    <img src={eye} className="smallIcon2" alt="" srcset="" />
                    <div>48</div>
                </div>
        </div>
    </div>
  )
}

export default SmallArticle