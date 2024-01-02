import "./App.css";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/buttonsContainer";
import Display from "./Components/display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
