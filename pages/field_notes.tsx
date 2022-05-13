/* eslint-disable react/jsx-key */
import Header from "../components/Header";
import {fieldNotes} from "../src/data";

const Field_Notes = () => {
        
    return ( 

        <div className="ecmain">
        <h1>Field Notes</h1> 
        <br />
        <div className="book-container">
            {fieldNotes.map((fieldNote) => (
                <div>
                    <h3>{fieldNote.title}</h3>
                    <p>{fieldNote.subtitle}</p>
                    <p>ISBN:{fieldNote.isbn}</p>
                    <br />
                </div>

            ))}
            
        </div>
        </div>

    );
}
 
export default Field_Notes ;
