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
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.payload
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
            let playerScore = action.payload.score;

            if (action.payload.name === "Markus Solbakken" && state.players.some(player => player.name === "Ståle Solbakken")) playerScore += 100;
            if (action.payload.name === "Ståle Solbakken" && state.players.some(player => player.name === "Markus Solbakken")) playerScore += 100;
            if (action.payload.name === "Pål Jacobsen" && state.players.some(player => player.name === "Tom Jacobsen")) playerScore += 100;
            if (action.payload.name === "Simen Bolkan Nordli" && state.players.some(player => player.name === "Leif Nordli")) playerScore += 100;

            return {
                ...state,
                players: [...state.players, action.payload],
                score: state.score + playerScore
            }
        case 'UPDATE_CAPTAIN':
            return {
                ...state,
                captain: action.payload,
                score: state.score + action.payload.score
            }
        case 'UPDATE_COACH':
            let coachScore = action.payload.score;

            if (action.payload.name === "Ståle Solbakken" && state.players.some(player => player.name === "Ståle Solbakken")) coachScore += 100;
            if (action.payload.name === "Vegard Skogheim" && state.players.some(player => player.name === "Vegard Skogheim")) coachScore += 100;

            return {
                ...state,
                coach: action.payload,
                score: state.score + coachScore
            }
        case 'UPDATE_STAFF':
            let staffScore = action.payload.score;

            if (action.payload.name === "Espen Olsen" && state.players.some(player => player.name === "Espen Olsen")) staffScore += 100;
            if (action.payload.name === "John Anders Rise" && state.players.some(player => player.name === "John Anders Rise")) staffScore += 100;
            if (action.payload.name === "Pål Jacobsen" && state.players.some(player => player.name === "Pål Jacobsen")) staffScore += 100;

            return {
                ...state,
                staff: action.payload,
                score: state.score + staffScore
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
                ...action.payload
            }
        default:
            return state;
    }
}