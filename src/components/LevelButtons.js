import React from 'react'

const LevelButtons = () => {

    const handleBeginnerClick = () => {

    }

    const handleIntermediateClick = () => {
        
    }

    const handleExpertClick = () => {
        
    }
    return(<div className="level-buttons">
        <button className="button-main" onClick={handleBeginnerClick}>Beginner</button>
        <button className="button-main" onClick={handleIntermediateClick}>Intermediate</button>
        <button className="button-main" onClick={handleExpertClick}>Expert</button>
    </div>)
}

export default LevelButtons