import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceJ = ({setChoice} ) => {
    return(
        <div className="choice" id='shrekLawsuit'>
        <h2 className="storyBeg" >CANNONBALL! SPLASH!!!</h2>
        <h2 className="storyMid">mud splashes onto members of royalty. <br></br>The Princess, the Duke, anndddd...<br></br> Big Hollywood troll known as SHREK.</h2>
        <h2 className="storyEnd">Shrek is sooo mad. He's going to sue you right NOW.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>damnn, maybe SHrek fOrget tomorrOw. <br></br> sleep it off, big guy</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceJ