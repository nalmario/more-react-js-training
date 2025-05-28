export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonsContainer = buttonsContainer;

  return (
    <>
      {/* JSX Commenting Syntax */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
