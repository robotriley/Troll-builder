import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"
import Beginning from "../Beginning"

const ChoiceH = ({setChoice} ) => {
    return(
        <div className="choice" id='redBug'>
        <h2 className="storyBeg" >you took da Red Bug.
        </h2>
        <h2 className="storyMid">you ready to see how deep the Troll Cave goes.
          reality melts away to reveal endless streams of green cryptology.oh wait...</h2>
        <h2 className="storyEnd">those are green BUGS. eat up, NEo (this is from matrix 1999)</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>Troll belly is full. Time to sleep.</button>
<br></br>
<br></br>
            
            </div>
    )
}

export default ChoiceH