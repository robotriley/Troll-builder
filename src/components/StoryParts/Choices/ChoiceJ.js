import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceJ = ({setChoice} ) => {
    return(
        <div className="choice" id='shrekLawsuit'>
        <h2 className="storyBeg" >CANNONBALL! SPLASH!!!</h2>
        <h2 className="storyMid">mud splashes onto the royalty. <br></br><em>The Princess...</em><br></br><em>the Duke...</em><br></br>anndddd...<br></br>SHREK, A.K.A. "BIG HOLLYWOOD"</h2>
        <h2 className="storyEnd">Shrek is sooo mad. He's going to sue you right NOW.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>damnn, maybe SHrek fOrget tomorrOw. <br></br> sleep it off, big guy</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceJ