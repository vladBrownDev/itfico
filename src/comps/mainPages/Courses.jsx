import './Courses.css';
import home from "../../img/homeIcon.png"
import navArrow from "../../img/navArrow.png"
import { Link } from "react-router-dom"
import SmallerCourse from '../SmallerCourse';

import csharp from "../../img/csharp.png"
import cplus from "../../img/cPlus.png"
import js from "../../img/js.png"

function Courses() {
  return (
    <section id="courses">
        <div className='smallNavbar'>
              <img src={home} alt="" />
              <Link to="/">Головна</Link>
              <img src={navArrow} alt="" />
              <div>Курси</div>
        </div>
        <h1>Курси</h1>
        <div id="coursesList">
            <div className='courseShell'>
                <Link to="/bigCourse">
                    <SmallerCourse
                        color="#C2E0FF"
                        head="C++ від нуля до героя"
                        desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                        img={cplus}
                        />
                </Link>
            </div>
            <div className='courseShell'>
                <SmallerCourse
                    color="#FFF7B9"
                    head="JS від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={js}/>
            </div>
            <div className='courseShell'>
                <SmallerCourse
                    color="#CCC1F6"
                    head="C# від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={csharp}/>
            </div>
            <div className='courseShell'>
                <SmallerCourse
                    color="#C2E0FF"
                    head="C++ від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={cplus}
                    />
            </div>
            <div className='courseShell'>
                <SmallerCourse
                    color="#FFF7B9"
                    head="JS від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={js}/>
            </div>
            <div className='courseShell'>
                <SmallerCourse
                    color="#CCC1F6"
                    head="C# від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={csharp}/>
            </div>
            <div className='courseShell'>
            <SmallerCourse
                    color="#C2E0FF"
                    head="C++ від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={cplus}
                    />
            </div>
            <div className='courseShell'>
                <SmallerCourse
                    color="#FFF7B9"
                    head="JS від нуля до героя"
                    desc="Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!"
                    img={js}/>
            </div>
        </div>
    </section>
  )
}

export default Courses