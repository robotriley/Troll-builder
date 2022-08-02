import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceH = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>you have taken the Red Bug. you are ready to see how deep the Troll Cave goes.
            reality melts away to reveal an endless stream of bright green cryptology. oh wait,
            those are just GREEN BUGS. enjoy your meal.
        </h2>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceH