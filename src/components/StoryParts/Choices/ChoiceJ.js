import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceJ = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>Heave, HO! CANNONBALL! SPLASH!!!</h2>
        <h2>the mud splashes onto several members of royalty including the Castle Duke anndddd...</h2>
        <h2> Big Hollywood troll known as Shrek. Shrek is sooo mad. He's going to sue you right NOW.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>damnn, maybe SHrek fOrget tomorrOw.</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceJ