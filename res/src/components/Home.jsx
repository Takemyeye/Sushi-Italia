import React, { useState, useEffect } from 'react';
import Header from './Header';
import Loader from './Preloader';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faInstagram, faTelegram, faGithub, faWhatsapp, faAutoprefixer} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return ( 
    <div>
    {loading ? <Loader /> : <div className='main1'>
      <Header />
      <div className='order'>
        <div className='sushi2'></div>
        <div className='text'>
          <h1>Wanna eat?</h1>
              <p>
                Japanese cuisine is renowned for its emphasis on fresh, high-quality ingredients and meticulous preparation techniques. 
                It embodies a delicate balance of flavors, textures, and colors, often presented with an artistic flair. 
                Key elements of Japanese cuisine include:
              </p>
                <p>
                  Japanese cuisine places a strong emphasis on seasonality, balance, and presentation, 
                  resulting in a culinary tradition that is both diverse and deeply rooted in Japanese culture and history.
                </p>
                <Link to='/'>
                  <div className='btn'>order now</div>
                </Link>
            </div>
      </div>

        <div className='main2'>
          <div className='menu'>
            <div className='food'>
              <div className='sushi5'></div>
                <h2>Uramaki</h2>
                  <p>Typically, uramaki features a variety of fillings such as fish, seafood, vegetables, and sauces, providing a diverse range of flavors and textures in each bite.</p>
                  <Link to='/'>
                    <div className='price'>buy 15$</div>
                    </Link>
            </div>
            <div className='food'>
              <div className='sushi6'></div>
                <h2>Kappa Maki</h2>
                  <p> The name "kappa" refers to a mythical creature in Japanese folklore, often depicted as a water sprite or river imp, which is said to enjoy cucumbers.</p>
                  <Link to='/'>
                    <div className='price'>buy 8$</div>
                    </Link>
            </div>
            <div className='food'>
              <div className='sushi7'></div>
                <h2>Canada</h2>
                  <p>Combining creamy avocado, fresh crab meat, and crunchy cucumber, all wrapped in seasoned rice and seaweed, they provide a delightful balance of textures and tastes.</p>
                  <Link to='/'>
                    <div className='price'>buy 10$</div>
                    </Link>
            </div>
            <div className='food'>
              <div className='sushi8'></div>
                <h2>California</h2>
                  <p>Made with a delicious combination of crab meat, avocado, and cucumber wrapped in seasoned rice and seaweed, they offer a delightful blend of flavors and textures.</p>
                    <Link to='/'>
                    <div className='price'>buy 8$</div>
                    </Link>
            </div>

            </div>
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
      {isVisible && (
        <div className='scroll' onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAutoprefixer} />
        </div>
      )}
      </div>  
    </div>}
    </div>
  );
};

export default Home;