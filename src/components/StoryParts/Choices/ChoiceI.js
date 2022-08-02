import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceI = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>carefully, sweetly, Troll dips one toe into Little Mud Lake.</h2>
        <h2>What's that? Troll reveals foot to see between two toes: A GOLD COIN! </h2>
        <h2>TROLL EAT WELL TONIGHT.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>TROLL is RICH!! Sleep WEll!</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceI