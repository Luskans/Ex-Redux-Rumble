import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';

export default function Game() {
   return (
      <div className="App">
         <Monster />
         <br></br>
         <section className="container-fluid">
            <PlayerList />
         </section>
      </div>
   );
}
