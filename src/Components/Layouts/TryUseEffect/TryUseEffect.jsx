import React,{ useState, useEffect } from 'react';
import hyoga from '../../../Images/Hyoga.jpg';
import {ButtonUI} from '../../UI/ButtonUI/ButtonUI';
import {Header} from '../Header/Header';

export const TryUseEffect = () => {

  const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const add = () => setCounter(counter + 10);
    const substract = () => setCounter(counter - 10);
    const reset = () => setCounter(0);

    return {
      counter,
      add,
      substract,
      reset
    }
    
  }
  const { counter, add, substract, reset } = useCounter();
  
  useEffect(() => {

    const img = document.getElementById('hyoga-img');

    if (counter >= 100) {
      img.classList.remove('Inactive');
      img.classList.add('Active')
    } else {
      img.classList.remove('Active');
      img.classList.add('Inactive')
    }
  },[counter]);

  return(
    <div className='div-home'>
      <Header />            
      <h1>{counter}</h1>
      <figure>
        <img className="" id="hyoga-img" src={hyoga} alt="Imagen de prueba"/>
      </figure>
      <div className='div-button'>
        <ButtonUI event={add} styleButton="btn-style" textButton="{+}" />
        <ButtonUI event={reset} styleButton="btn-style" textButton="{Reset}" />
        <ButtonUI event={substract} styleButton="btn-style" textButton="{-}" />
      </div>      
    </div>
  );
};