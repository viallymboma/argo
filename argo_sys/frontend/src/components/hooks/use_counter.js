import { useEffect, useState } from "react";

const useCounter = (operation) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval =setInterval(() => {
            {
                if (operation === "plus") {
                    setCounter((prevCounter) => prevCounter + 1);
                } else if (operation === "minus") {
                    setCounter((prevCounter) => prevCounter - 1);
                }
            }
        }, 1000);

        return () => clearInterval(interval)
    }, [operation])

    return counter
};

export default useCounter;