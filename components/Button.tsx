type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props:ButtonProps) => {
    return ( 
        <button onClick={props.handleClick}>CLICK</button>
     );

}
 
export default Button ;