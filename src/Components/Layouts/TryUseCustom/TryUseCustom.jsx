import React, {useState} from 'react';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import {Header} from '../Header/Header';


export const TryUseCustom = () => {
 
  
  const useCounter = () => {
    
    const [counter, setCounter] = useState(0);

    const addCounter = () => setCounter(counter + 1);
    const resetCounter = () => setCounter(0);
    const substractCounter = () => setCounter(counter - 1);

    return {
      counter,
      addCounter,
      resetCounter,
      substractCounter
    }
  }

  const { counter, addCounter, substractCounter, resetCounter } = useCounter();

  return (
    <div className='div-home'>
      <Header />
      <h1>{counter}</h1>
      <hr />
      <div className="div-button">
        <ButtonUI event={addCounter} styleButton="btn-style" textButton="{+}" />
        <ButtonUI event={resetCounter} styleButton="btn-style" textButton="{Reset}" />
        <ButtonUI event={substractCounter} styleButton="btn-style" textButton="{-}" />
      </div>
    </div>
  )
}
