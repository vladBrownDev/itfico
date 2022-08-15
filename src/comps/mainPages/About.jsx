import './About.css';
import { Link } from "react-router-dom"

import home from "../../img/homeIcon.png"
import navArrow from "../../img/navArrow.png"
import stas from "../../img/stas.png"

function About() {
  return (
    <>
        <section id="about">
            <div className='smallNavbar'>
                <img src={home} alt="" />
                <Link to="/">Головна</Link>
                <img src={navArrow} alt="" />
                <div>Про мене</div>
            </div>
            <div id="mainAbout">
                <h1>Про мене</h1>
                <div id="mainMiddle">
                    <div id="mainMiddleText">
                        <p>Привіт! Я Стас. Я розробник повного стека більше 5 років. За час свого розвитку я написав багато статей і записав відеопорад для новачків і професіоналів. Я отримав багато позитивних відгуків, але розумію, що цього недостатньо для початку.</p>
                        <p>
                            Багато молодих людей регулярно запитують мене, що я повинен спочатку вчитися, щоб стати розробником. Ви хочете мати чітке та покрокове керівництво, які теми слід вивчити в першу чергу.
                            <div>Тож цей сайт із курсами та статтями розроблено для вас!</div></p>
                            
                        <p>Крім того, я надаю персональні консультації та навчання, <span>зв’яжіться зі мною,
                            якщо ви хочете покращити свої навички програмування:</span></p>
                    </div>
                    <img id="stasImg" src={stas} alt="" />
                </div>
            </div>
            <section id="mainForm">
                <h1 className='mainH1'>Зв'яжіться зі мною</h1>
                <p>Не хочете пропускати жодних новин, тоді підпишіться на нашу розсилку.</p>
                <div>
                    <input placeholder="Повне ім'я" type="text" />
                    <input placeholder='Ваша Email адреса' type="text" />
                    <button className='normalBut'>
                        Зв’язатися
                    </button>
                </div>
            </section>
        </section>
    </>
        
  );
}

export default About;