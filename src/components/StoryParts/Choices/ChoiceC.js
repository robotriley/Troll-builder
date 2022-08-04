import ChoiceG from "./ChoiceG"
import ChoiceH from "./ChoiceH"

const ChoiceC = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>lifting and flipping that heavy rock made me soooo hungry. oh look, TWO JUICY BUGS to eat!!!</h2>

        <button onClick={() => setChoice(<ChoiceG setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceH setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceC