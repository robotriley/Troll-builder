import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceG = ({setChoice} ) => {
    return(
        <div className="choice" id='blueBug'>
        <h2 className="storyBeg">Troll eat blue bug.
        </h2>
        <h2 className="storyMid">In 15 minutes, Troll feels the most vitality,
          potency and confidence he has felt in yeaRS!!!!.</h2>
        <h3 className="storyEnd">Claim a freeBlue Bug sample by carving the letter B
          into your cave entrance tree.</h3>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>Nice. Go to bed 👹 </button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceG