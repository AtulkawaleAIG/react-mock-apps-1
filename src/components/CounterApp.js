import Label from "./Label";
import BlueButton from "./BlueButton";
import Button from "./Button";
import {useState, useEffect} from "react"; // hook (lifecycle)

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    // 1. useEffect is called once the page is loaded.
    // 2. it needs an input value which is a variable on whose change in value useEffect is to be called.
    // 3. called infintely if no square backets used.
    useEffect(() => {

    }, [counter]);

    const decrementCounter = () => {
        console.log("Decrement Counter Called");
        setCounter(value => value-1);
    }

    const incrementCounter = () => {
        console.log("Increment Counter Called.");
        setCounter(value => value+1);
    }

    return(
        <div>
            <BlueButton clicked={decrementCounter}>Decrement</BlueButton>
            <Label>{counter}</Label>
            <Button css="btn btn-success" clicked={incrementCounter}>Increment</Button>
        </div>
    );
}

export default CounterApp;