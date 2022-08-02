import Beginning from "../Beginning"
import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceN = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>you turned over Rock. you find two juicy BuGS!!</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceN