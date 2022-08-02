import ChoiceM from "./ChoiceM.js"
import ChoiceN from "./ChoiceN.js"

const ChoiceF = ({setChoice} ) => {
    return(
        <div>
        <h2> Troll summons the forest sherrif with a noise complaint.</h2>
            <h2>Human Bard and Sherrif ridicule Troll's behavior while recording Troll on their tablets.</h2>
            <h2>The images of "Troll Karen"spread virally across the land.</h2>

        <button onClick={() => setChoice(<ChoiceM setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceN setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceF