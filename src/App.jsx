import { useState } from "react";
import illustrationImg from "./assets/images/illustration-empty.svg";

function App() {
  const [count, setCount] = useState(0);
  function handleClear() {}
  function handleSubmit() {}
  return (
    <>
      <div className="flex gap-0 bg-slate-100 h-screen justify-center items-center">
        <div className="flex bg-white w-1/2 h-3/5 rounded-2xl overflow-hidden">
          <div id="repayment-section " className="p-8 w-1/2 h-full">
            <div className="flex  justify-between">
              <h1 className="font-sans font-bold text-2xl ">
                Mortgage Calculator
              </h1>
              <button
                className="bg-white border-none underline text-slate-400"
                onClick={handleClear}
              >
                Clear All
              </button>
            </div>
            <form
              action="submit"
              className="flex-col gap-8 mt-4 h-full justify-around text-slate-400"
            >
              <div>
                <label htmlFor="mortgage-amount">Mortgage Amount</label>
                <input
                  type="text"
                  id="mortgage-amount"
                  className="block w-full outline-slate-500 border border-slate-300 rounded-md py-[8px] px-3 overflow-hidden"
                />
                <span className="absolute  bg-slate-100 text-slate-900 py-[0.45rem] px-[0.7rem] -translate-y-[2.5rem] translate-x-[2px] rounded-sm">
                  $
                </span>
              </div>

              <div>
                <label htmlFor="mortgage-term">
                  Mortgage Term
                  <input id="mortgage-term" type="text" />
                </label>
                <label htmlFor="interest-rate">
                  Interest Rate
                  <input id="interest-rate" type="text" />
                </label>
              </div>
              <div>
                <span>Mortgage Type</span>
                <label htmlFor="repayment">
                  <input type="radio" name="type" />
                  Repayment
                </label>
                <label htmlFor="interest-only">
                  <input type="radio" name="type" />
                  Interest Only
                </label>
              </div>
              <button
                onSubmit={handleSubmit}
                className="bg-lime font-bold w-2/3 p-2 flex rounded-3xl justify-center gap-2 text-slate-950"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#133041"
                    d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
                  />
                </svg>
                Calculate Repayments
              </button>
            </form>
          </div>
          {/* result section starts here */}
          <div
            id="results-section"
            className="bg-slate-800 w-1/2 rounded-bl-4xl p-4"
          >
            <img src={illustrationImg} className="mx-auto mt-14" />
            <h1 className="text-white text-center font-bold text-2xl my-2">
              Results shown here
            </h1>
            <p className="text-slate-300 text-center text-sm mx-8">
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
