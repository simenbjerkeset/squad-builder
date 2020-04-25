import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    step: 0,
    name: "",
    formation: "",
    playerStep: 1,
    players: [],
    captain: "",
    coach: "",
    staff: "",
    arena: "",
    sponsor: "",
    matchSnack: ""
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
    
    return (
        <GlobalContext.Provider value={{
            ...state,
            nextStep,
            nextPlayer,
            updateTeamName,
            updateFormation,
            addPlayer,
            updateCaptain,
            updateCoach,
            updateStaff}}>
            {children}
        </GlobalContext.Provider>
    )
}