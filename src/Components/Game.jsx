import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { useSelector } from 'react-redux';

export default function Game() {
   const result = useSelector((state) => state.fight.fight);
   const resultDisplay = () => {
      if (result === "victory") {
         return <h2>Victoire !</h2>
      } else if (result === "defeat") {
         return <h2>Défaite !</h2>
      } else {
         null
      }
   };

   return (
      <div className="App">
         <Monster />
         {resultDisplay()}
         <br></br>
         <section className="container-fluid">
            <PlayerList />
         </section>
      </div>
   );
}
