import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

export default function Post({ post }) {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/posts/${post.id}`);
    };

    return (
        <article className="msg" onClick={onClick}>
            <div>
                <header>
                  <div>Имя Фамилия</div>
                  <span>{moment(post.created).fromNow()}</span>
                </header>
                <div>
                    <p>{post.content}</p>
                </div>
            </div>
        </article>
    );
}