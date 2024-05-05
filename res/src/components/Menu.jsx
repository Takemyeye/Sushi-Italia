import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='main2'>
      <div className='menu'>
        <div className='food'>
          <div className='sushi sushi5' loading='lazy'></div>
          <h2>Uramaki</h2>
          <p>Typically, uramaki features a variety of fillings such as fish, seafood, vegetables, and sauces, providing a diverse range of flavors and textures in each bite.</p>
          <Link to='/'>
            <div className='price'>buy 15$</div>
          </Link>
        </div>

        <div className='food'>
          <div className='sushi sushi6' loading='lazy'></div>
          <h2>Kappa Maki</h2>
          <p>The name "kappa" refers to a mythical creature in Japanese folklore, often depicted as a water sprite or river imp, which is said to enjoy cucumbers.</p>
          <Link to='/'>
            <div className='price'>buy 8$</div>
          </Link>
        </div>

        <div className='food'>
          <div className='sushi sushi7' loading='lazy'></div>
          <h2>Canada</h2>
          <p>Combining creamy avocado, fresh crab meat, and crunchy cucumber, all wrapped in seasoned rice and seaweed, they provide a delightful balance of textures and tastes.</p>
          <Link to='/'>
            <div className='price'>buy 10$</div>
          </Link>
        </div>

        <div className='food'>
          <div className='sushi sushi8' loading='lazy'></div>
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
            Sushitaly Albano Laziale is the place for traditional Japanese cuisine in the heart of the Castelli Romani, combining the quality of its products with the convenience and punctuality of take-away and delivery services. It offers a meticulously crafted menu, and in the form of take-away and delivery, allows you to enjoy it comfortably at home.
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
    </div>
  );
};

export default Menu;