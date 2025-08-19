import TextType from "./typerEffect";

export default function Typer() {
  return (
    <TextType
      text={["Welcome Agent . . .", "Click The Button To Gain Access . . ."]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  );
}
