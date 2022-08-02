import ChoiceM from "./ChoiceM.js"
import ChoiceN from "./ChoiceN.js"
import Beginning from '../Beginning'

const ChoiceF = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2> Troll summons the forest sherrif with a noise complaint.</h2>
            <h2>Human Bard and Sherrif ridicule Troll's behavior while recording Troll on their tablets.</h2>
            <h2>The images of "Troll Karen"spread virally across the land.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>sAd. sleeP iT oFf</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceF