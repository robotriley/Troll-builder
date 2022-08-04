import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceI = ({setChoice} ) => {
    return(
        <div className="choice" id='richTroll'>
        <h2 className="storyBeg">carefully, sweetly...</h2>
        <h2 className="storyMid">Troll dips toes into<br></br> Little Mud Lake.
        What's that? Something caught between troll's toes: A GOLD COIN! </h2>
        <h2 className="storyEnd">TROLL EAT WELL TONIGHT.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>TROLL is RICH!! Sleep WEll!</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceI