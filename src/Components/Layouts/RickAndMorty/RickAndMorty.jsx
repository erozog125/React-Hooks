import React,{useState} from 'react';
import { Card } from '../../UI/Card/Card';
import { Header } from '../Header/Header';
import Rick from '../../../Images/Rick.png';



export const RickAndMorty = () => {

  const URL = 'https://rickandmortyapi.com/api/character/?name=';
  const [cards, setCards] = useState([
    {
      name: 'Rick',
      gender: 'Male',
      image: Rick,
    },
  ]);

  const FetchApi = (event) => {
    if (event.keyCode === 13) {
      fetch(URL + event.target.value)
        .then((res) => res.json())
        .then((data) => {
          setCards(data.results);
        });
    }
  };

  return (
    <>
    <Header />
      <div className="div-home">
        <h2>What character do you want to show?</h2>
        <input className='input-character' placeholder="Find a character" onKeyUp={FetchApi} />
        <div className="div-cards">
          {cards.map((character) => (
            <Card key={character.name} card={character} />
          ))}
        </div>
      </div>    
    </>
  );
};

