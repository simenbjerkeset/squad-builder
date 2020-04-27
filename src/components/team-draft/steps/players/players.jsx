import React, { useContext } from 'react';

import { GlobalContext } from '../../../../context/GlobalState';

import Captain from '../captain';
import Position from './position';

const Players = () => {
    const { playerStep } = useContext(GlobalContext);

    switch(playerStep) {
        case 1: return <Position position="goalkeeper" />
        case 2: return <Position position="rightBack" />
        case 3: return <Position position="centralDefender"/>
        case 4: return <Position position="centralDefender"/>
        case 5: return <Position position="leftBack"/>
        case 6: return <Position position="centralMidfielder"/>
        case 7: return <Position position="rightWinger"/>
        case 8: return <Position position="centralMidfielder"/>
        case 9: return <Position position="centralMidfielder"/>
        case 10:return <Position position="leftWinger" />
        case 11:return <Position position="rightWinger" />
        case 12:return <Position position="centralMidfielder" />
        case 13:return <Position position="leftWinger" />
        case 14:return <Position position="striker" />
        case 15:return <Position position="striker" />
        default:return <Captain />
    }
}

export default Players;