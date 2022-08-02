import ChoiceA from './Choices/ChoiceA';
import ChoiceB from './Choices/ChoiceB';
import { Link, Routes, Route } from 'react-router-dom'

const Beginning = ({setChoice} ) => {
    return(
        <div> 
            <h1>Good morning. You are a troll. Every morning is good now.</h1>
            <h2>How do you start your morning?</h2>

            <button onClick={() => setChoice(<ChoiceA setChoice={setChoice} />) }>Turn Over Rock</button>
<br></br>
<br></br>
            <button onClick={() => setChoice(<ChoiceB setChoice={setChoice} />) }>Grab Stick</button>

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