import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from "../Beginning"

const ChoiceH = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>you have taken the Red Bug. you are ready to see how deep the Troll Cave goes.
            reality melts away to reveal an endless stream of bright green cryptology. oh wait,
            those are just GREEN BUGS. enjoy your meal.
        </h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>Troll belly is full. Time to sleep.</button>
<br></br>
<br></br>
            
            </div>
    )
}

export default ChoiceH