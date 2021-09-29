import "./App.css";
import Display from "./components/Display";
import Counter from "./components/Counter";
import { Container } from "./components/styled";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Display></Display>
          <Counter></Counter>
        </Container>
      </header>
    </div>
  );
}

export default App;
