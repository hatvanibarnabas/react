
"use client";
import React from 'react';
import deliveryManBg from '../img/delivery-man.png';
import InputWithButton from './InputWithButton';

const Subscribe = () => {
    const handleButtonClick = () => {
        console.log("A gombra kattintottak!");
      };
  return (
    <div className='container'>
        <div className='subscribe' style={{
            backgroundImage: `linear-gradient(to right, #F4F5FB, rgba(255, 255, 255, 0)), url(${deliveryManBg.src})`,
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='subscribe--input-container'>
                <div>
                    <h1 className='subscribe--title'>Maradj napra kész!</h1>
                    <p className='subscribe--subtitle'>Iratkozz fel hírlevelünkre, hogy elsőként értesülj új szolgáltatásainkról, híreinkről és praktikus logisztikai tippekről.</p>
                    <InputWithButton buttonText="Feliratkozok" onButtonClick={handleButtonClick} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Subscribe;
