import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';

export const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/'><ButtonUI styleButton="btn-style" textButton="Home" /></NavLink>
      <NavLink to='/useState'><ButtonUI styleButton="btn-style" textButton="UseState" /></NavLink>
      <NavLink to='/useCustom'><ButtonUI styleButton="btn-style" textButton="UseCustom" /></NavLink>
      <NavLink to='/useEffect'><ButtonUI styleButton="btn-style" textButton="UseEffect" /></NavLink>
      <NavLink to='/RickAndMorty'><ButtonUI styleButton="btn-style" textButton="Rick And Morty" /></NavLink>
    </div>    
  )
}
