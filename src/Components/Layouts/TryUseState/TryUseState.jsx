import React,{useState} from 'react';
import {ButtonUI} from '../../UI/ButtonUI/ButtonUI';
import {Header} from '../Header/Header'

export const TryUseState = () => {

  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => setCounter(counter + 1);
  const handleResetCounter = () => setCounter(0);
  const handleSubstractCounter = () => setCounter(counter - 1);

  return (
    <div className='div-counter'>
      <Header />
      <h1>{counter}</h1>
      <hr />
      <div className="div-button">
        <ButtonUI event={handleAddCounter} styleButton="btn-style" textButton="{+}" />
        <ButtonUI event={handleResetCounter} styleButton="btn-style" textButton="{Reset}" />
        <ButtonUI event={handleSubstractCounter} styleButton="btn-style" textButton="{-}" />
      </div>
    </div>
  )
}
