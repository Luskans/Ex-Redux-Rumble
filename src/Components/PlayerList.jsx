import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';

export default function PlayerList() {

   const players = useSelector((state) => state.fight.players);
  
   const displayPlayers = (players) => {
      return players.map((player) => (
         <PlayerCard key={player.id} player={player} />
      ));
   };

   return <div className="row">{displayPlayers(players)}</div>;
}
