// const Button = (props) => {
//     return(
//         <button className={props.bluecss}>{props.children}</button>
//     );
// }


const Button = ({css, children, clicked}) => {
    return(
        <button className={css} onClick={clicked}>{children}</button>
    );
}

export default Button;