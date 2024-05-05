import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
    <header>
      <Link to="/">
        <div className='titel'>S.I</div>
      </Link>
        <div className='sushi3'></div>
        <div className='sushi1'></div>
          <div className='about'>
          <span onClick={scrollToBottom}>about us</span>
            <span onClick={scrollToBottom}>specialtise</span>
            <span onClick={scrollToBottom}>position</span>
            <span onClick={scrollToBottom}>orari</span>
          </div>
    </header>
  );
};

export default Header;