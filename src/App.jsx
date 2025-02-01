import { useState } from "react";
import illustrationImg from "./assets/images/illustration-empty.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-0 bg-slate-100 h-screen justify-center items-center">
        <div className="flex bg-white">
          <div id="repayment-section ">
            <h1 className="font-sans font-bold">Mortgage Calculator</h1>
          </div>
          <div id="results-section">
            <img src={illustrationImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
