import React from 'react';

export default function ButtonCapacity() {
   const combat = () => {
      console.log('aie !');
   };
   return (
      <button
         type="button"
         onClick={() => combat}
         className="btn btn-success material-tooltip-main "
      >
         hit
         <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> -
         5
      </button>
   );
}