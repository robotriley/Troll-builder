import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceK = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>you turned over Rock. you find two juicy BuGS!!</h2>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceK