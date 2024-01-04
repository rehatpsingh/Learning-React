import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/buttonsContainer";
import Display from "./Components/display";

function App() {
  let [calVal, setCalVal] = useState("45");
  const buttonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={buttonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
