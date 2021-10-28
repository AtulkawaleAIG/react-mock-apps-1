import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

const Card = () => {
    return(
        <div className="btn btn-card">
            <CardHeader>Registration Form</CardHeader>
            <CardBody>Hello</CardBody>
            <CardFooter>Submit</CardFooter>
        </div>
    );
}

export default Card;