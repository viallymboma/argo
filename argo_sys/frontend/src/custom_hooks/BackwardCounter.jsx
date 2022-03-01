import React from 'react'
import useCounter from '../components/hooks/use_counter'

const BackwardCounter = () => {
  const counter = useCounter("minus")
  return (
    <div>
        {counter}
    </div>
  )
}

export default BackwardCounter









// const [counter, setCounter] = useState(0)

// useEffect(() => {
//   const interval =setInterval(() => {
//     setCounter((prevCounter) => prevCounter - 1);
//   }, 1000);

//   return () => clearInterval(interval)
// }, [])