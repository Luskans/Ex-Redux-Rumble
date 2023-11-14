import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    players: [
        { name: 'John', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, turn: true },
        { name: 'Jack', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, turn: true },
        { name: 'Jessy', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, turn: true },
        { name: 'Jenny', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, turn: true },
    ],
    monster: {
        pv: 800,
        pvMax: 800
    },
    fight: "pending"
}

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            (state.monster.pv > 0 && state.players[action.payload.id-1].pv > 0) 
            ? state.monster.pv -= action.payload.damage 
            : null;
        },

        hitBack: (state, action) => {
            (state.monster.pv > 0 && state.players[action.payload.id-1].pv > 0) 
            ? state.players[action.payload.id-1].pv -= action.payload.damage 
            : null;
        },

        checkFight: (state) => {
            let totalPv = 0;
            state.players.forEach((player) => {
                totalPv += player.pv;
            });  

            if (state.monster.pv <= 0) {
                state.fight = "victory";
            } else if (totalPv <= 0) {
                state.fight = "defeat";
            } else {
                state.fight = "pending";
            }
        },

        checkTurns: (state) => {
            let turnsOff = 0;
            const cards = document.querySelectorAll('.card');

            state.players.forEach((player) => {
                (player.turn === false) ? turnsOff += 1 : turnsOff += 0;
            });  

            if (turnsOff === 4) {
                state.players.forEach((player) => {
                    player.turn = true;
                });
                
                cards.forEach((card) => {
                    card.classList.remove('turnOff');
                })
            }
        },

        changeTurn: (state, action) => {
            (state.players[action.payload-1].turn === true)
            ? state.players[action.payload-1].turn = false
            : null;
        }
    },
})

export const { hitMonster, hitBack, checkFight, changeTurn, checkTurns } = fightSlice.actions;
export default fightSlice.reducer;