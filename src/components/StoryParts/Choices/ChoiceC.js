import ChoiceG from "./ChoiceG"
import ChoiceH from "./ChoiceH"

const ChoiceC = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2 className="storyBeg">Lifting and flipping</h2>
        <h2 className="storyMid">heavy rocks makes me soooo hungry. oh look...</h2>
        <h2 className="storyEnd">TWO JUICY BUGS!!!</h2>

        <button onClick={() => setChoice(<ChoiceG setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceH setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceC