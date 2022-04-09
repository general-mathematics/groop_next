import { ReactChild, ReactFragment, ReactPortal } from "react";

const Input = (props: { label: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; value: string | number | readonly string[] | undefined; }) => {
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

function setName(value: string): void {
    throw new Error("Function not implemented.");
}
