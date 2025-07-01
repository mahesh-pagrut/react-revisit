import { useEffect, useState } from "react"


const useDebounce = (value, delay = 500) => {
    const [debouncedVal, setDebouncedVal] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedVal(value)
        }, delay);
        return () => clearTimeout(timeoutId);

    }, [value, delay])

    return debouncedVal
};
export default useDebounce;