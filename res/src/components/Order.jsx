import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
  return (
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
  );
};

export default Order;
