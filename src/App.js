import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";
import CounterApp from './components/CounterApp';

// Functional component
function App() {
  return (
    <div>
      <div>
        <Button css="btn btn-primary">Submit</Button>
      </div>

        <br/>
        <hr/>

      <div>
        <Card />
      </div>

      <br/>
      <hr/>

      <div>
        <CounterApp></CounterApp>
      </div>
    </div>
  );
}

export default App;
