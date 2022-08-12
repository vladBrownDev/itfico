import './Donation.css';
import { Link } from 'react-router-dom';
import home from "../../img/homeIcon.png"
import navArrow from "../../img/navArrow.png"

import coffee1 from "../../img/coffee1.png"
import coffee2 from "../../img/coffee2.png"
import coffee3 from "../../img/coffee3.png"
import coffee4 from "../../img/coffee4.png"
import coffee5 from "../../img/coffee5.png"
import donation from "../../img/donation.png"

function Donation() {
  return (
        <section id="donation">
            <div className='smallNavbar'>
                <img src={home} alt="" />
                <Link to="/">Головна</Link>
                <img src={navArrow} alt="" />
                <div>Підтримка</div>
            </div>
            <div id='mainDonation'>
                <div id="donationText">
                    <h1>Пожертвування</h1>
                    <p>Якщо вам сподобався цей проект, то ви можете зробити свій внесок у його підтримку та розвиток, перерахувавши будь-яку суму на один з таких реквізитів:</p>
                    <div id="donationButtons"> 
                            <img src={coffee1} alt="" />                   
                        
                            <img src={coffee2} alt="" />
                        
                            <img src={coffee3} alt="" />
                        
                            <img src={coffee4} alt="" />
                        
                            <img src={coffee5} alt="" />
                    </div>
                </div>
                <img id="donationImg" src={donation} alt="" />
            </div>
        </section>
  );
}

export default Donation;