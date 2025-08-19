import { useEffect, useState } from "react";
import Squares from "../background/backgroundGrid";
import Button from "./button";

const LandingPage = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  function handleClick(){
    setTriggerAnimation(true);
  }

  return(
    <div> 
        <Button onClick={handleClick}/>
        <Squares className={triggerAnimation ? "disappearAnimation" : ""}/>
    </div>
  )
};

export default LandingPage;
