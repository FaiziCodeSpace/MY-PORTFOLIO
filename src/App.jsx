import './index.css';
import './app.css';
import LandingPage from './Components/landingPage/landingPage';
import NebulaBackground from './Components/MainPage/NebulaBackground';


function App(){
  
  return(<>
    {/* <LandingPage/> */}
    <div>
      <NebulaBackground
        style={{ width: "100%", height: "80vh"}}
      />
    </div>
  </>)
}

export default App
