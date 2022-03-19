import { useState } from "react";


const App = () => {
const [result, setResult] = useState(0);

const PlusCounter = () => {
setResult(result + 1)
}

const MinusCounter = () => {
  setResult(result - 1)
  }

 return (
   <>
   <button onClick={PlusCounter}>+</button>
   <span>{result}</span>
   <button onClick={MinusCounter}>-</button>
   </>
 )
};

export default App;
