import { useState, useRef } from "react";
import "./button.css";
import Typer from "./typer";

const GlareHover = ({
  onClick,
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [display, setDisplay] = useState(true);
  const hoverSound = useRef(new Audio("/sounds/hover.wav"));
  const clickSound = useRef(new Audio("/sounds/click.wav"));

  const handleClick = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
    setCollapsed(true);
    setTimeout(() => {
      setDisplay(!display);
    }, 180); 
    onClick();
  };
  const handleHover = () => {
    hoverSound.current.currentTime = 0; // reset playback to start
    hoverSound.current.play();
  };

  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const vars = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-bg": background,
    "--gh-br": borderRadius,
    "--gh-angle": `${glareAngle}deg`,
    "--gh-duration": `${transitionDuration}ms`,
    "--gh-size": `${glareSize}%`,
    "--gh-rgba": rgba,
    "--gh-border": borderColor,
  };

  return (
    <>
      {display ? <Typer /> : null}
      {display ? (
        <div
          onClick={handleClick}
          onMouseEnter={handleHover}
          className={`glare-hover ${collapsed ? "collapsed" : ""} ${className}`}
          style={{ ...vars, ...style }}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

export default GlareHover;
