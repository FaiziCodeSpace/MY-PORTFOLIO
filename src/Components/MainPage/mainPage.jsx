import NebulaBackground from "./NebulaBackground";
import Header from "./textAnimation";
import CardSlider from "./CardSlider";
import ExperienceSlider from "./experienceSlider";
import Profile from "./ProfileCard";
import Describtion from "./describtion";

export default function MainPage() {
  return (
    <>
      {/* THE WORK BOX  */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path
              d="
              M0.999 0 
              C0.9996 0 1 0.0006 1 0.0013 
              V0.3517 
              C1 0.4162 0.971 0.4689 0.9375 0.4689 
              H0.8403 
              C0.8242 0.4689 0.8125 0.4924 0.8125 0.5209 
              V0.8822 
              C0.8125 0.9477 0.784 1 0.75 1 
              H0.25 
              C0.2159 1 0.1875 0.9477 0.1875 0.8822 
              V0.5226 
              C0.1875 0.4938 0.175 0.4702 0.1597 0.4702 
              H0.0625 
              C0.0280 0.4702 0 0.4179 0 0.3529 
              V0.0013 
              C0 0.0006 0.0007 0 0.0007 0 
              H0.999Z
            "
            />
          </clipPath>
        </defs>
      </svg>
      {/* THE WORK BOX  */}

      {/* HERO SECTION */}
      <div className="custom-shape">
        <NebulaBackground style={{ width: "100%", height: "100%" }} />
      </div>
      <Header />
      {/* HERO SECTION */}

      {/* SIDE CARDS - HERO SECTION */}
      <div className="card-Container-main">
        <CardSlider />
        <ExperienceSlider />
      </div>
      {/* SIDE CARDS - HERO SECTION */}

      {/* INTRODUCTION 2nd SECTION */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: "9rem"
        }}>
          <Profile />
          <Describtion/>
        </div>
        {/* INTRODUCTION 2nd SECTION */}
    </>
  );
}
