import './SeasonDisplay.css';
import React from 'react';
 
const seasonConfig = {
    summer: {
        text: 'Summer',
        iconName: 'sun'
    }, 
    winter: {
        text: 'Winter',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {
    if (latitude >= 0) {
        return (month >2 && month <9) ? 'summer' : 'winter';
    } else {
        return (month <3 || month >8) ? 'summer' : 'winter';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left big ${iconName} icon`}></i>
            <h3>{`Season: ${text}`}</h3>
            <i className={`icon-right big ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;
