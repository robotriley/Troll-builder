import ChoiceI from "./ChoiceI"
import ChoiceJ from "./ChoiceJ"

const ChoiceD = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2 className="storyBeg">Little Mud Lake.</h2>
        <h2 className="storyMed">best view in the land. and the mud is just fine for dippin'.</h2>
        <h2 className="storyEnd">Time for SWIM</h2>

        <button onClick={() => setChoice(<ChoiceI setChoice={setChoice} />) }>carefully dip your troll toe in da mud</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceJ setChoice={setChoice} />) }>jump into the mud with reckless abandon</button>
            </div>
    )
}

export default ChoiceD