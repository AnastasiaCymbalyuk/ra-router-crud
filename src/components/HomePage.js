import React from "react";
import Posts from "./Posts";
import useJsonFetch from "./useJsonFetch";

export default function HomePage() {
    const [data, isLoading, error] = useJsonFetch(`http://localhost:7070/posts`);
  
    return (
        <div>
            {isLoading && <div> Загрузка </div>}
            {error && <div> {error} </div>}
  
            {data && !isLoading && (
                <section>
                    {data.length < 1 ? <div>нет постов</div> : <Posts data={data} />}
                </section>
            )}
        </div>
    );
}
