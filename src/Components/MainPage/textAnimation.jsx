import BlurText from "./header";
import "./header.css"
export default function Header() {
  return (
    <>
    <div className="blurText-Wrapper">
      <BlurText
        text="Faizi k."
        delay={100}
        animateBy="letters"
        direction="bottom"
        className="header"
      />
      <div className="buttons">
        <button class="button btn-1" role="button">About</button>
        <button class="button btn-2" role="button">Contact</button>
      </div>
     </div>
    </>
  );
}
