import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceA = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>you stomp and clomp into the swampiest woods in the land. they smell like cabbage. There is a 
            rock over here and Little Mud Lake over there.
        </h2>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Turn over big rock</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>go to Little Mud Lake</button>
            </div>
    )
}

export default ChoiceA