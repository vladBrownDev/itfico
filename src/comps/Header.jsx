import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../../src/img/logo.png"

function Header() {
  return (
        <header>
            <Link to="/"><img src={logo} alt="" srcset="" /></Link>
            <div id="headButtons">
                <Link to="/blog">Блог</Link>
                <Link to="/courses">Курси</Link>
                <div>Про мене</div>
                <div>Підписка на сайт</div>
                <div>Підтримка</div>
            </div>
            <div id="langSelect">
                <div className='activeLang'>UKR</div>
                <div>ENG</div>
            </div>
        </header>
  );
}

export default Header;