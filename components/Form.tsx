import { useState } from "react";
import styles from "./Form.module.scss";

function Form(){
    const [title, setTitle] = useState(""); 
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Vikki");


    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className={styles.create}>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
            </label>
            <label>Blog Body</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Rich">Rich</option>
                <option value="Vikki">Vikki</option>
            </select>
            <button>Add Blog</button>

        
        <h1>{title}</h1>
        <p>{body}</p>
        <p className={styles.testcolor}>{author}</p>
        </form>

        
        </div>
    )
}
export default Form;