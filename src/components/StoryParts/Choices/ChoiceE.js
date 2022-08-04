import ChoiceD from "./ChoiceD"
import Beginning from '../Beginning'

const ChoiceE = ({setChoice} ) => {
    return(
        <div className="choice" id='trollBand'>
        <h2 className="storyBeg"><em>"My my my..."</em> sayeth the BARD.
        </h2>
        <h2 className="storyMid"> "you have amazing taste in rare troll music! <br></br> please join me in song. <br></br> we shall
          travel the land uniting humans and trolls with gentle melody and mirth."</h2>
        <h1 className="storyEnd">Troll: "hell yea"</h1>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>A beautiful troll day. (go to sleep now)</button>
<br></br>
<br></br>

            </div>
    )
}

export default ChoiceE