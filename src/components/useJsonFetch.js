import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts=null) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, opts);
                if (!response.ok) {
                throw new Error(response.statusText);
                }
                const json = await response.json();
                setData(json);
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, opts]);
    return [data, isLoading, error];
}