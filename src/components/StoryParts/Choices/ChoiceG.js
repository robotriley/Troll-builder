import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceG = ({setChoice} ) => {
    return(
        <div className="choice" id='blueBug'>
        <h2>Troll eat blue bug. In less than 15 minutes, Troll feels the most vitality, 
            potency and confidence he has felt in yeaRS!!!!.
        </h2>
        <h3>Claim your free sample of Blue Bug by carving the letter B
            into the tree closest to your cave entrance.
        </h3>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>Nice. Go to bed 👹 </button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceG