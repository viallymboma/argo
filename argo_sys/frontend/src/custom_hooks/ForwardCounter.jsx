import React from 'react'
import useCounter from '../components/hooks/use_counter';

const ForwardCounter = () => {
  const counter = useCounter("plus");  
  return (
    <div>
      {counter}
    </div>
  )
}

export default ForwardCounter




// useEffect(() => {
//   const [counter, setCounter] = useState(0)
//   const interval = setInterval(() => {
//     setCounter((prevCounter) => prevCounter + 1);
//   }, 1000);

//   return () => clearInterval(interval)
// }, [])