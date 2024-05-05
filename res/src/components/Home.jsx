import React, { useState, useEffect } from 'react';
import Header from './Header';
import Loader from './Preloader';
import PrivacyPolicy from './Privacy';
import Menu from './Menu';
import Order from './Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAutoprefixer} from '@fortawesome/free-brands-svg-icons';

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
      <Order />
      <Menu />
      <PrivacyPolicy />
        {isVisible && (
          <div className='scroll' onClick={scrollToTop}>
            <FontAwesomeIcon icon={faAutoprefixer} />
          </div>
        )}
      </div>
      }
    </div>
  );
};

export default Home;