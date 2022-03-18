const Input = (props) => {
    return ( 
        <label>{props.label}:
            <input 
                type="text"
                value={props.value}
                onChange={(e) => setName(e.target.value)}
                    />
            </label>
     );
}
 
export default Input ;