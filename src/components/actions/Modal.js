import React, { useState } from "react";
import { actionCreate } from "./actions";
import { store } from "../../pages/home/home";

let lastId = 20;
export default function Modal({isOpen}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    

    function handleSubmit(e) {
        lastId += 1; 
        store.dispatch(actionCreate(lastId, title, body));
        isOpen();   
    }
    return(
        <div className="modal">
            <input onChange={(e)=>{setTitle(e.target.value)}} className = "modal-input" placeholder="Title..."></input>
            <textarea onChange={(e)=>{setBody(e.target.value)}} className= "modal-input" id="body"  placeholder="Body..."></textarea>
            <button onClick={handleSubmit} className="modal-add-button">Submit</button>
        </div>
    )
}