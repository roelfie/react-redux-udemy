import React from 'react';

const isSummer = (latitude, month) => {
    if (latitude >= 0) {
        return (month >2 && month <9);
    } else {
        return (month <3 || month >8);
    }
}

const SeasonDisplay = (props) => {
    const summer = isSummer(props.latitude, new Date().getMonth());
    const icon = summer === true ? 'sun' : 'snowflake';
    return (
        <div>
            <div>Season: {summer === true ? 'Summer' : 'Winter'}</div>
            <div>
                <i className={`${icon} big icon`}></i>
            </div>
        </div>
    );
};

export default SeasonDisplay;
