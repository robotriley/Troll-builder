import ChoiceI from "./ChoiceI"
import ChoiceJ from "./ChoiceJ"

const ChoiceD = ({setChoice} ) => {
    return(
        <div>
        <h2>Little mud Lake. best view in the land. and the mud is just fine for dippin'.</h2>

        <button onClick={() => setChoice(<ChoiceI setChoice={setChoice} />) }>carefully dip your troll toe in da mud</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceJ setChoice={setChoice} />) }>jump into the mud with reckless abandon</button>
            </div>
    )
}

export default ChoiceD