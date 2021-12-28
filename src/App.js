import { React, useState } from 'react'
import logo from './logo.svg';

import './App.css';
import { Header } from './Components/Header/Header';

const Card = ({person, club, teamGoals, cardClick}) =>{
  const[goals, setGoals] = useState(0);

  const handleCardClick = () =>{
    setGoals(goals+1);
    cardClick();
  }


  return(
    <div onClick={handleCardClick}>
      <h3>
        {person.firstName}{person.lastName}
      </h3>
      <span>
        Играет в клубе {club}
      </span>
      <h3>
        Кол-во забитых голов:{goals}

      </h3>

    </div>

  )
}


function App() {
  const [teamGoals,setTeamGoals] = useState(0);

const handleCardClick = () =>{
  setTeamGoals(teamGoals+1);
}

  return (
    <div className="App">
      <h1>Количество командных голов: {teamGoals} </h1>
     <header className="App-header">
        <Card 
          cardClick = {handleCardClick}
          person={{firstName:'Иван', lastName:' Иванов'}} 
          club='Зенит'
          goals={ teamGoals }/>
          <Card
          cardClick = {handleCardClick} 
          person={{firstName:'Пётр', lastName:' Петров'}} 
          club='Зенит'
          goals={ teamGoals }/>
          <Card 
          cardClick = {handleCardClick}
          person={{firstName:'Кирилл', lastName:' Селигей'}} 
          club='Зенит'
          goals={ teamGoals }/>
     </header>
    </div>
  );
}

export default App;
