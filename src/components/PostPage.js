import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useJsonFetch from './useJsonFetch';
import Post from './Post';
import Form from './Form';

export default function PostPage() {
    const { id } = useParams();
    const [isEdit, setEdit] = useState(false);
    const [data, isLoading, error] = useJsonFetch(`http://localhost:7070/posts/`);
 
    const findPost = () => data.find((el) => +el.id === +id);
    const navigate = useNavigate();
    const onClose = () => navigate('/');
 
    const onDelete = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then(() => onClose());
    };
 
    const onEdit = () => { setEdit(!isEdit) };
 
    const onSubmit = (content) => {
        fetch(`http://localhost:7070/posts/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: +id, content }),
        }).then(() => onClose());
    };
 
    return (
        <div>
            {isLoading && <div> Загрузка... </div>}
            {error && <div> {error} </div>}
            {data && !isLoading && (
                <div>
                    <button onClick={onClose}> назад </button>
                    <Post post={findPost()} />
                    <div>
                        <button onClick={onDelete}>удалить</button>
                        <button onClick={onEdit}>редактировать</button>
                        {isEdit && (
                            <div>
                                <Form post={findPost()} onSubmit={onSubmit} onClose={onClose}/>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
 }