import ChoiceE from "./ChoiceE"
import ChoiceF from "./ChoiceF"

const ChoiceB = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2 className="storyBeg" >Who is Troll without bridge?</h2>
        <h2 className="storyMid">I don't want to find out.<br></br> <br></br> Who is this human under my favorite bridge? it's a</h2>
        <h2 className="storyEnd"> <em>BARD...</em> playing his...<em>LUTE???</em> </h2>

        <button onClick={() => setChoice(<ChoiceE setChoice={setChoice} />) }>request favorite underground song...he prolly hasn't heard it</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceF setChoice={setChoice} />) }>defend your rightful Bridge from this hooman</button>
            </div>
    )
}

export default ChoiceB