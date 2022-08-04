import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceA = ({setChoice} ) => {
    return(
        <div className="choice">
        <div>
        <h2 className="storyBeg" >stomping n' clomping
        </h2>
          <h2 className="storyMid">into the swampiest woods in the land. they smell like cabbage.</h2>
          <h2 className="storyEnd">There is a
            ROCK over here and Little Mud LAKE over there.</h2>
        </div>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Turn over big rock</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>go to Little Mud Lake</button>
            </div>
    )
}

export default ChoiceA