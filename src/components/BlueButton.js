const BlueButton = ({children, clicked}) => {
    return(
        <div>
            <button className="btn btn-primary" onClick={clicked}>{children}</button>
        </div>
    );
}

export default BlueButton;