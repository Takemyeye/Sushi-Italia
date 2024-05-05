import React from 'react';
import './styles/preloader.css'; 

const Loader = () => {
  return (
    <div className="back">
      <div className='loader1'></div>
      <div className="loader"></div> 
      <div className='text-loader'>Sushi Italia</div>
    </div>
  );
}

export default Loader;