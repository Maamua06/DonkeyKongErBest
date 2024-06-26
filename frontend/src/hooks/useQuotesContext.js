import { QuotesContext } from "../context/QuoteContext";
import { useContext } from "react";

export const useQuotesContext = () => {
    const context = useContext(QuotesContext)

    if (!context) {
        throw Error('useQuoteContext must be used inside an QuotesContextProvider')
    }

    return context
}