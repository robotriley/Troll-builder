import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceI = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>carefully, sweetly, Troll dips one toe into Little Mud Lake.</h2>
        <h2>What's that? Troll reveals foot to see between two toes: A GOLD COIN! </h2>
        <h2>TROLL EAT WELL TONIGHT.</h2>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceI