import BlueButton from "./BlueButton";

const CardFooter = (props) => {
    return(
        <div className="card card-footer">
            <BlueButton>{props.children}</BlueButton>
        </div>
    );
}

export default CardFooter;