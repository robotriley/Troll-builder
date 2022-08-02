import ChoiceK from "./ChoiceK"
import ChoiceD from "./ChoiceD"

const ChoiceE = ({setChoice} ) => {
    return(
        <div className="choice">
        <h2>Human: "Oh my, you have such amazing taste in rare troll music! please join me in song. we shall
            travel the land uniting humans and trolls with gentle melody and mirth."
        </h2>
        <h2>Troll: "hell yea"</h2>

        <button onClick={() => setChoice(<ChoiceK setChoice={setChoice} />) }>Eat da blue BUg</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceD setChoice={setChoice} />) }>eAt dA ReD bUG</button>
            </div>
    )
}

export default ChoiceE