import { useState } from "react";
import styles from "./Form.module.scss";

function Form(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

      const handleSubmit = (e:React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLSelectElement>):void => {
        e.preventDefault();
        const blog = { title, body, author };

        console.log(blog);
  }

    return (
        <div className={styles.create}>
        <form onSubmit={(e)=> {}}>
            <label>Blog Title:
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    />
            </label>
            <label>Blog Body</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name="body"
            ></textarea>
            <label>Blog Author:</label>
            <select
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
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