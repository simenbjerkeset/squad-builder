export default (state, action) => {
    switch(action.type) {
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            }
        case 'NEXT_PLAYER':
            let nextPlayer = state.playerStep + 1
            if (nextPlayer === 6 && state.formation !== "4-3-3") nextPlayer++
            if (nextPlayer === 7 && state.formation !== "4-4-2") nextPlayer++
            if (nextPlayer === 10 && state.formation !== "4-4-2") nextPlayer++
            if (nextPlayer === 11 && state.formation === "4-4-2") nextPlayer++
            if (nextPlayer === 12 && state.formation !== "4-2-3-1") nextPlayer++
            if (nextPlayer === 13 && state.formation === "4-4-2") nextPlayer++
            if (nextPlayer === 15 && state.formation !== "4-4-2") nextPlayer++

            return {
                ...state,
                playerStep: nextPlayer
            }
        case 'UPDATE_TEAM_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'UPDATE_FORMATION':
            return {
                ...state,
                formation: action.payload
            }
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [...state.players, action.payload],
                score: state.score + action.payload.score
            }
        case 'UPDATE_CAPTAIN':
            return {
                ...state,
                captain: action.payload,
                score: state.score + action.payload.score
            }
        case 'UPDATE_COACH':
            return {
                ...state,
                coach: action.payload,
                score: state.score + action.payload.score
            }
        case 'UPDATE_STAFF':
            return {
                ...state,
                staff: action.payload,
                score: state.score + action.payload.score
            }
        case 'UPDATE_ARENA':
            return {
                ...state,
                arena: action.payload,
                score: state.score + action.payload.score
            }
        case 'UPDATE_SPONSOR':
            return {
                ...state,
                sponsor: action.payload,
                score: state.score + action.payload.score
            }
        case 'UPDATE_MATCH_SNACK':
            return {
                ...state,
                matchSnack: action.payload,
                score: state.score + action.payload.score
            }
        case 'START_OVER':
            return {
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
                matchSnack: "",
                score: 0
            }
        default:
            return state;
    }
}