import ChoiceC from "./ChoiceC"
import ChoiceD from "./ChoiceD"

const ChoiceG = ({setChoice} ) => {
    return(
        <div>
        <h2>Troll eats the blue bug. In less than 15 minutes, Troll feels more vitality, 
            potency and confidence than he has felt in the last decade!!!!.
        </h2>
        <h3>If you would like a free sample of Blue Bugs discreetly sent to you, carve the letter B
            into the tree closest to your cave entrance.
        </h3>

        <button onClick={() => setChoice(<ChoiceC setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceG