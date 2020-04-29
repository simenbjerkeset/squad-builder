import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import DATA from '../data/root-data';

const initialState = {
    step: 0,
    username: "",
    name: "",
    formation: "",
    playerStep: 1,
    players: [],
    captain: "",
    coach: "",
    staff: "",
    arena: "",
    sponsor: "",
    matchSnack: "",
    score: 0,
    goalkeepers: DATA.PLAYERS.GOALKEEPERS,
    rightBacks: DATA.PLAYERS.RIGHT_BACKS,
    centralDefenders: DATA.PLAYERS.CENTRAL_DEFENDERS,
    leftBacks: DATA.PLAYERS.LEFT_BACKS,
    centralMidfielders: DATA.PLAYERS.CENTRAL_MIDFIELDERS,
    rightWingers: DATA.PLAYERS.RIGHT_WINGERS,
    leftWingers: DATA.PLAYERS.LEFT_WINGERS,
    strikers: DATA.PLAYERS.STRIKERS
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const nextStep = () => {
        dispatch({
            type: 'NEXT_STEP'
        })
    }

    const nextPlayer = () => {
        dispatch({
            type: 'NEXT_PLAYER'
        })
    }

    const updateUsername = (name) => {
        dispatch({
            type: 'UPDATE_USERNAME',
            payload: name
        })
    }

    const updateTeamName = (name) => {
        dispatch({
            type: 'UPDATE_TEAM_NAME',
            payload: name
        })
    }

    const updateFormation = (formation) => {
        dispatch({
            type: 'UPDATE_FORMATION',
            payload: formation
        })
    }

    const addPlayer = (player) => {
        dispatch({
            type: 'ADD_PLAYER',
            payload: player
        })
    }

    const updateCaptain = (player) => {
        dispatch({
            type: 'UPDATE_CAPTAIN',
            payload: player
        })
    }
    
    const updateCoach = (coach) => {
        dispatch({
            type: 'UPDATE_COACH',
            payload: coach
        })
    }

    const updateStaff = (staff) => {
        dispatch({
            type: 'UPDATE_STAFF',
            payload: staff
        })
    }

    const updateArena = (arena) => {
        dispatch({
            type: 'UPDATE_ARENA',
            payload: arena
        })
    }

    const updateSponsor = (sponsor) => {
        dispatch({
            type: 'UPDATE_SPONSOR',
            payload: sponsor
        })
    }

    const updateMatchSnacks = (matchSnack) => {
        dispatch({
            type: 'UPDATE_MATCH_SNACK',
            payload: matchSnack
        })
    }

    const startOver = () => {
        dispatch({
            type: 'START_OVER',
            payload: initialState
        })
    }
    
    return (
        <GlobalContext.Provider value={{
            ...state,
            nextStep,
            nextPlayer,
            updateUsername,
            updateTeamName,
            updateFormation,
            addPlayer,
            updateCaptain,
            updateCoach,
            updateStaff,
            updateArena,
            updateSponsor,
            updateMatchSnacks,
            startOver}}>
            {children}
        </GlobalContext.Provider>
    )
}