import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

const apiUrl = process.env.REACT_APP_API_URL;

export const useStartSide = () => {
    const { user } = useAuthContext(); 
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [quotes, setQuotes] = useState(null);

    const startSide = async () => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${apiUrl}/api/quotes/random`);
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        } else {
            if (Array.isArray(json)) {
                setQuotes(json);
            } else {
                setQuotes([json]);
            }
            setIsLoading(false);
        }
    };

    // Log quotes after it has been updated
    useEffect(() => {
        console.log("Quotes:", quotes);
    }, [quotes]);

    return { startSide, quotes, isLoading, error };
};
