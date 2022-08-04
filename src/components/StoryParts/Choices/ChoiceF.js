import Beginning from '../Beginning'

const ChoiceF = ({setChoice} ) => {
    return(
        <div className="choice" id='trollKaren'>
        <h2 className="storyBeg" > Troll summons Sherrif with NOISE COMPLAINT.</h2>
            <h2 className="storyMid">Noise Complaint is not very effective. <br></br> Human Bard and Sherrif ridicule Troll's behavior while recording Troll on their tablets.</h2>
            <h2 className="storyEnd">Images of "Troll Karen" spread virally across the land.</h2>

        <button onClick={() => setChoice(<Beginning setChoice={setChoice} />) }>sAd. sleeP iT oFf</button>
<br></br>
<br></br>
            </div>
    )
}

export default ChoiceF