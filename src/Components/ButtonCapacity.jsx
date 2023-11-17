import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitMonster, hitBack, checkFight, changeTurn, checkTurns } from '../features/fight/fightSlice';

export default function ButtonCapacity({ player }) {
   const dispatch = useDispatch();

   const combat = () => {
      if (player.turn) {
         dispatch(hitMonster({
            damage: 40,
            id: player.id
         }));
         dispatch(hitBack({
            damage: 20,
            id: player.id
         }));
         dispatch(changeTurn(player.id));
      }
      dispatch(checkFight());
      dispatch(checkTurns());
   };

   return (
      <button
         type="button"
         onClick={() => combat()}
         className="btn btn-success material-tooltip-main "
      >
         hit <i className="fas fa-bomb"></i> 5 <i className="fas fa-fire-alt"></i> 5
      </button>
   );
}
