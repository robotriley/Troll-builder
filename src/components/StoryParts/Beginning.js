import ChoiceA from './Choices/ChoiceA';
import ChoiceB from './Choices/ChoiceB';
import { Link, Routes, Route } from 'react-router-dom'

const Beginning = ({setChoice} ) => {
    return(
        <div className="choice"> 
        <h1 className="storyBeg" >Good morning.</h1>
        <h2 className="storyMid">You are a troll. Every morning is good now.</h2>
        <h2 className="storyEnd" >What do you doing today?</h2>

            <button onClick={() => setChoice(<ChoiceA setChoice={setChoice} />) }>Go to Swampy Woods</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceB setChoice={setChoice} />) }>Go under favorite bridge</button>

            {/* <Link to="/choicea" > Choice A </Link>

            <Link to="/choiceb" > Choice B </Link>

            <Routes>
            <Route path='/choicea' element={<ChoiceA />} />
            
            <Route path='/choiceb' element={<ChoiceB />} />
            
            
            </Routes> */}
        </div>
            
    )
}
export default Beginning;