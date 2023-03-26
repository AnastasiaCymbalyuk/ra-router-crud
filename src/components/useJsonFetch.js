import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts=null) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
              console.log(response.status);  
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setError(null);
        })
        .catch((error) => {
            setError(true);
            throw new Error('Ошибка запроса на сервер');
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [url, opts]);
    return [data, isLoading, error];
}