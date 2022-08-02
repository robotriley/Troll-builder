import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceJ = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>Heave, HO! CANNONBALL! SPLASH!!!</h2>
        <h2>the mud splashes onto several members of royalty including the Castle Duke anndddd...</h2>
        <h2> Big Hollywood troll known as Shrek. Shrek is so mad. He's going to sue you right now.</h2>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceJ