import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import image1 from '../../../Images/background.jpg';

export const Home = () => {
  return (
    <div className='div-home'>
    <Header />
    <img className='img-home' src={image1} alt="Imagen 1" />
    </div>    
  )
}
