import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceE = ({setChoice} ) => {
    return(
        <div className="choice" id='trollBand'>
        <h2>Human: "Oh my, you have such amazing taste in rare troll music! please join me in song. we shall
            travel the land uniting humans and trolls with gentle melody and mirth."
        </h2>
        <h2>Troll: "hell yea"</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>A beautiful troll day. (go to sleep now)</button>
<br></br>
<br></br>

            </div>
    )
}

export default ChoiceE