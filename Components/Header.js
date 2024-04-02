
import React from 'react';
import Image from 'next/image'
import girlImage from '../img/girl.png';
import arrowImage from '../img/arrow-right.png';
import headerBgImage from '../img/header-bg.png';


const Header = () => {
  return (
    <div style={{
      backgroundImage: `url(${headerBgImage.src})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='container'>
          <div className='header'>
              <h1 className='header--title'>Headline</h1>
              <h1 className='header--title2'>A jövő fulfillment megoldása a jelenben</h1>
              <p className='header--subtitle'>Subline</p>
              <h5 className='header--description'>Profi logisztika, alacsony költségek és növekedési lehetőség. 
              Tartsd a fókuszod az értékesítésen, mi intézzük a logisztikát!</h5>
              <h5 className='header--description2'>Webáruházak és e-kereskedők számára automatizált és költséghatékony raktári logisztikai megoldások. Akár 30-50% megtakarítást nyújtunk a manuális raktározási költségekhez képest.</h5>
              <div className='header--buttons-container'>
                  <button className='header--button1'>Ajánlatot kérek <span>
                  <Image
                    src={arrowImage}
                    alt="React"
                  />
                  </span></button>
                  <button className='header--button2'>Többet akarok tudni</button>
              </div>
              <div>
                <Image
                    src={girlImage}
                    className='header--girl-image'
                    alt="React"
                  />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
