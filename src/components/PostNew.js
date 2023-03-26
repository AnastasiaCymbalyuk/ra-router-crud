import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function PostNews () {
    const navigate = useNavigate();
    const onClose = () => navigate('/');
 
    const onSubmit = (content) => {
        if (content === '') {
            onClose();
            return;
        }
        fetch(`http://localhost:7070/posts`, {
            method: 'POST',
            body: JSON.stringify({ id: 0, content }),
        }).then(() => onClose());
    };
 
    return (
       <div>
          <Form onSubmit={onSubmit} onClose={onClose} />
       </div>
    );
}