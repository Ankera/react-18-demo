import { useState } from "react";
import Comp1 from '@/components/comp1'
import Comp2 from "./components/comp2";

function App() {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <div onClick={addCount}>
      顶级组件
      {count}

      <h1><Comp1 /></h1>
      <h1><Comp2 /></h1>
    </div>
  );
}

export default App;