import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faInstagram, faTelegram, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return ( 
    <div className='main1'>
      <Header />
      <div className='main2'>
        <div className='foter-back'>
          <div className='conteiner'>
            <div className='icon-sushi'></div>
              <div className='about-us'>
                <h2> About Us</h2>
                Sushitaly Albano Laziale is the place for traditional Japanese cuisine in the heart of the Castelli Romani, 
                combining the quality of its products with the convenience and punctuality of take-away and delivery services.
                It offers a meticulously crafted menu, and in the form of take-away and delivery, allows you to enjoy it comfortably at home.
              </div>
          </div>
          <div className='conteiner'>
            <div className='specialtise'>
              <h2>Specialtise</h2>
              <Link to=""><p>Grill and wok</p></Link>
              <Link to=""><p>Tempura and fried dishes</p></Link>
              <Link to=""><p>Poke, salads, and snacks</p></Link>
              <Link to=""><p>Sashimi</p></Link>
              <Link to=""><p>Gunkan</p></Link>
              <Link to=""><p>Tartare</p></Link>
              <Link to=""><p>Nigiri</p></Link>
              <Link to=""><p>Hosomaki</p></Link>
              <Link to=""><p>Uramaki</p></Link>
              <Link to=""><p>Desserts</p></Link>
              <Link to=""><p>Japanese beers</p></Link>
            </div>
          </div>
        </div>
        <div className='privacy'>
          <h1>Policy</h1>
        <div className='policy'>
          <p>Di Marconi18 Srl | Email: sushitalyalbano@gmail.com | PEC: marconi18@legalmail.it
            Office Phone: (+39) 340.1273-488 |
            Cookie & Privacy Policy
            VAT Number: 15463571008 | Chamber of Commerce Registration: RM-1592116</p>
          <p>Website created by TakeMyEye (2024)</p>
          <p>Privacy PolicyCookie Policy</p>
        </div>
        <div className="socium">
            <a href="https://www.instagram.com/takemyeyehz/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            <a href="https://t.me/takemyeye" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            <a href="https://github.com/Takemyeye" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a> 
            <a href="https://www.facebook.com/sushitalyalbano/">
                <FontAwesomeIcon icon={faFacebook} />
              </a> 
            <a href="https://web.whatsapp.com/">
              <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
            <a href="/">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Home;