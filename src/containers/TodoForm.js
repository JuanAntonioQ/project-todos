import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export default ({}) => {
    
    const [title, setTitle] = useState("");
    let history = useHistory(); // navegar

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(!title.length){
                alert("me cago en ti");
                return;
            }
            history.replace("/");
        }}>
            <input value={title} onChange={(event) => {setTitle(event.target.value)}} required/>
            <button type="submit">Añadir</button>
        </form>
    )
}