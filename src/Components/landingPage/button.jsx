import GlareHover from "./buttonEffect";

export default function Button({onClick}) {
  return (
    
      <GlareHover
        onClick={onClick}
        glareColor="#ffffff"
        glareOpacity={0.5}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <h2
          style={{
            fontSize: "clamp(1rem, 5vw, 2rem)",
            fontWeight: "100",
            color: "white",
            margin: 0,
          }}
        >
          Grant Access
        </h2>
      </GlareHover>
    
  );
}
