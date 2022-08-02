import ChoiceE from "./ChoiceE"
import ChoiceF from "./ChoiceF"

const ChoiceB = ({setChoice} ) => {
    return(
        <div>
        <h2>What is a troll without a bridge? I don't want to know. That's why I'm here. at the bridge.</h2>
        <h2>Who is human under my favorite bridge? it's a bard...playing a song on his lute</h2>

        <button onClick={() => setChoice(<ChoiceE setChoice={setChoice} />) }>request favorite underground song...he prolly hasn't heard it</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceF setChoice={setChoice} />) }>defend your rightful Bridge from this hooman</button>
            </div>
    )
}

export default ChoiceB