import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGithub, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const PrivacyPolicy = () => {
  return (
    <div className='privacy'>
      <h1>Policy</h1>
      <div className='policy'>
        <p>
          Di Marconi18 Srl | Email: sushitalyalbano@gmail.com | PEC: marconi18@legalmail.it Office Phone: (+39) 340.1273-488 | Cookie & Privacy Policy VAT Number: 15463571008 | Chamber of Commerce Registration: RM-1592116
        </p>
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
  );
};

export default PrivacyPolicy;