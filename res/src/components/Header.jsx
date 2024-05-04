import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className='titel'>S.I</div>
      </Link>
        <div className='about'>
          <span>abaut us</span>
          <span>specialtise</span>
          <span>position</span>
          <span>orari</span>
        </div>
    </header>
  );
};

export default Header;