import GlareHover from "./buttonEffect";

export default function Button() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.5}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            color: "black",
            margin: 0,
          }}
        >
          Grant Access
        </h2>
      </GlareHover>
    </div>
  );
}
