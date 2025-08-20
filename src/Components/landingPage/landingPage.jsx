import { useEffect, useState } from "react";
import Squares from "../background/backgroundGrid";
import Button from "./button";

const LandingPage = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [display, setDisplay] = useState(true);

  function handleClick() {
    setTriggerAnimation(true);
    setTimeout(() => {
      setDisplay(false);
    }, 1000);
  }

  return (
    <div>
      {display ? (
        <>
          <Button onClick={handleClick} />
          <Squares className={triggerAnimation ? "disappearAnimation" : ""} />
        </>
      ) : null}
    </div>
  );
};

export default LandingPage;
