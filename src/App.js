import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Card from "./components/Card";
import CounterApp from './components/CounterApp';
import {useState} from "react";
import BlueButton from './components/BlueButton';

// Functional component
function App() {

  const [counterArray, setCounterArray] = useState([0, 1, 2]);

  const addCounter = () => {
    const counterArrayCopy = [...counterArray];
    counterArrayCopy.push(counterArray.length);
    setCounterArray(counterArrayCopy);
  }

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
        {counterArray.map(counter => <CounterApp counterValue={counter} />)}
        {/* <CounterApp></CounterApp> */}
        <br />

        <BlueButton clicked={addCounter}>Add Counter</BlueButton>
      </div>
    </div>
  );
}

export default App;
