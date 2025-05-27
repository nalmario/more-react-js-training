export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer; // must store the prop in a variable to be used as a n element

  return (
    <>
      {/* JSX Commenting Syntax */}
      <buttonsContainer>{buttons}</buttonsContainer>
      {children}
    </>
  );
}
