import React,{useState, useEffect} from 'react';
// import { Card } from '../../UI/Card/Card';
import { Header } from '../Header/Header';
// import Rick from '../../../Images/Rick.png';

export const RickAndMorty = () => {

  const URL = 'https://rickandmortyapi.com/api/character/?name=';

  const [keyState, setKeyState] = useState(false);
  // const [cards, setCards] = useState([
  //   {
  //     name: 'Rick',
  //     gender: 'Male',
  //     image: Rick,
  //   },
  // ]);

  const handleState = (event) =>{

    if (event.code === "Enter") {
      setKeyState(!keyState);  
      FetchApi(event)   
    }
  } 
 
  const FetchApi = (event) => {
    console.log(URL+event.target);
  //   fetch(URL + event)
  //   .then((res) => res.json())
  //   .then((data) => {
  //   setCards(data.results);
  // });    
  };

  return (
    <>
      <Header />
      <div className="div-home">
        <h2>What character do you want to show?</h2>
        <input className='input-character' placeholder="Find a character" onKeyUp={handleState} />
        {/* <div className="div-cards">
          {cards.map((character) => (
            <Card key={character.name} card={character} />
          ))}
        </div> */}
      </div>    
    </>
  );
};

