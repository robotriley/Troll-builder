import React, {useState} from 'react'
import Beginning from './StoryParts/Beginning'

const GameArea = () => {
    const [choice, setChoice] = useState(null)

    return(
        <div id='gameArea'>
            {choice ? choice : <Beginning setChoice={setChoice} />}
        </div>
    )
}

export default GameArea