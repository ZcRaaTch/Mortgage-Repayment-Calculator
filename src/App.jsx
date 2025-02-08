import { useState } from "react";
import illustrationImg from "./assets/images/illustration-empty.svg";

function App() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");
  // handling change in rate input for valid value of rate
  const handleChange = (e) => {
    let val = e.target.value;

    // Allow only numbers and a single decimal
    if (!/^\d*\.?\d*$/.test(val)) return;

    // Restrict to 2 decimal places
    if (val.includes(".")) {
      let [int, decimal] = val.split(".");
      if (decimal?.length > 2) {
        val = int + "." + decimal.slice(0, 2);
      }
    }
    setRate(val);
  };
  const handleTypeChange = (e) => {
    setType(e);
  };
  // handling clear button to reset all the values
  function handleClear() {
    setAmount("");
    setYears("");
    setRate("");
    setType("");
    setResult("");
    setTotal("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !years || !rate) return;

    const P = parseFloat(amount);

    if (type === "repayment") {
      const r = parseFloat(rate) / 100 / 12;
      const n = parseInt(years) * 12;
      const M = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
      setResult(M.toLocaleString("en-US", { minimumFractionDigits: 2 }));
      // console.log(M.toLocaleString("en-US", { minimumFractionDigits: 2 }));

      const tm = M * n;
      // console.log(tm.toLocaleString("en-US", { minimumFractionDigits: 2 }));
      setTotal(tm.toLocaleString("en-US", { minimumFractionDigits: 2 }));
    } else if (type === "interest") {
      const r = parseFloat(rate) / 100;
      const t = parseInt(years);
      const M = (P * r) / 12;
      setResult(M.toLocaleString("en-US", { minimumFractionDigits: 2 }));
      // console.log(M.toLocaleString("en-US", { minimumFractionDigits: 2 }));
      const tm = P + M * t * 12;
      // console.log(tm.toLocaleString("en-US", { minimumFractionDigits: 2 }));
      setTotal(tm.toLocaleString("en-US", { minimumFractionDigits: 2 }));
    }
  }
  return (
    <>
      <div className="flex gap-0 bg-slate-100 h-screen justify-center items-center w-screen">
        <div className="flex bg-white w-1/2 min-h-[61%] rounded-2xl overflow-hidden">
          <div id="repayment-section " className="p-8 w-1/2 h-full">
            <div className="flex h-10 justify-between">
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
              onSubmit={handleSubmit}
              className="flex-col gap-8 mt-4 h-full justify-between text-slate-400"
            >
              {/* mortgage amount */}
              <div className="my-6">
                <label htmlFor="mortgage-amount">Mortgage Amount</label>
                <div className="flex w-full border-slate-300 border overflow-hidden rounded-md cursor-pointer my-2 group-hover:border-slate-600 group-hover:border-2 hover:border-1.5 hover:border-slate-600 focus-within:border-lime focus-within:border-1.5 focus:border-lime parent-has-input-focus">
                  <span className="bg-slate-100 h-full p-1.5 px-3 text-slate-600 font-bold helper-box">
                    $
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    id="mortgage-amount"
                    className="text-slate-900 font-bold border-none outline-none w-full cursor-pointer px-4 appearance-none"
                    required
                  />
                </div>
              </div>
              {/* mortgage rate and years */}
              <div className="flex gap-4 w-full my-4">
                <div className="">
                  <label htmlFor="mortgage-term">Mortgage Term</label>
                  <div className="flex gap-2 border-slate-300 border overflow-hidden rounded-md cursor-pointer my-2 parent-has-input-focus group-hover:border-slate-600 group-hover:border-2 hover:border-1.5 hover:border-slate-600 focus-within:border-lime focus-within:border-1.5 focus:border-lime">
                    <input
                      className="font-bold outline-none border-none text-slate-900 w-[7.77rem] px-3 inline cursor-pointer appearance-none"
                      id="mortgage-term"
                      type="number"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      pattern="[0-9]"
                      required
                    />
                    <span className="p-1.5 h-full bg-slate-100 px-2 text-slate-600 font-bold helper-box">
                      years
                    </span>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="interest-rate">Interest Rate</label>
                  <div className="flex gap-2 border-slate-300 border overflow-hidden rounded-md cursor-pointer my-2 parent-has-input-focus group-hover:border-slate-600 group-hover:border-2 hover:border-1.5 hover:border-slate-600 focus-within:border-lime focus-within:border-1.5 focus:border-lime">
                    <input
                      className="font-bold outline-none border-none text-slate-900 w-full px-3 cursor-pointer appearance-none"
                      id="interest-rate"
                      type="number"
                      value={rate}
                      onChange={handleChange}
                      required
                    />
                    <span className="p-1.5 h-full bg-slate-100 px-2 text-slate-600 font-bold helper-box">
                      %
                    </span>
                  </div>
                </div>
              </div>
              {/* mortgage type */}
              <div className="my-4">
                <span className="">Mortgage Type</span>
                <div
                  className={`block border border-slate-300 p-2.5 rounded-md my-2 cursor-pointer hover:border-lime ${
                    type === "repayment"
                      ? "border-lime bg-lime bg-opacity-30"
                      : "border-slate-300"
                  }`}
                  onClick={() => handleTypeChange("repayment")}
                >
                  <input
                    type="radio"
                    id="mortgage-type"
                    name="type"
                    value="repayment"
                    checked={type === "repayment"}
                    required
                    onChange={() => {}}
                    className="mx-2 cursor-pointer "
                  />
                  <label
                    htmlFor="mortgage-type"
                    className="cursor-pointer w-full text-slate-900 font-bold"
                  >
                    Repayment
                  </label>
                </div>
                <div
                  className={`block border border-slate-300 p-2.5 rounded-md my-2 cursor-pointer hover:border-lime ${
                    type === "interest"
                      ? "border-lime bg-lime bg-opacity-30"
                      : "border-slate-300"
                  }`}
                  onClick={() => handleTypeChange("interest")}
                >
                  <input
                    type="radio"
                    name="type"
                    id="interest-only"
                    value="interest"
                    checked={type === "interest"}
                    required
                    onChange={() => {}}
                    className="peer mx-2 cursor-pointer "
                  />
                  <label
                    htmlFor="interest-only"
                    className="cursor-pointer w-full text-slate-900 font-bold"
                  >
                    Interest Only
                  </label>
                </div>
              </div>
              <button className="bg-lime font-bold w-2/3 p-2 flex rounded-3xl justify-center gap-2 text-slate-950">
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
            className="bg-slate-900 w-1/2 rounded-bl-4xl p-5"
          >
            {result ? (
              <div>
                <h1 className="text-white font-bold text-2xl my-2">
                  Your results
                </h1>
                <p className="text-slate-400 text-sm my-4">
                  Your results Your results are shown below based on the
                  information you provided. To adjust the results, edit the form
                  and click “calculate repayments” again.
                </p>
                <div className="bg-slate-800 border-t-lime border-t-4 rounded-md w-full p-8 my-10">
                  <p className="text-slate-400 text-sm">
                    Your monthly repayments
                  </p>
                  <p className="text-lime font-bold text-5xl my-3">
                    $ {result}
                  </p>
                  <hr className="bg-slate-400 border-0 my-8 h-px" />
                  <p className="text-slate-400 text-sm my-4">
                    Total you'll repay over the term
                  </p>
                  <p className="text-slate-200 font-bold text-lg">$ {total}</p>
                </div>
              </div>
            ) : (
              <div className="">
                <img src={illustrationImg} className="mx-auto mt-14" />
                <h1 className="text-white text-center font-bold text-2xl my-2">
                  Results shown here
                </h1>
                <p className="text-slate-400 text-center text-sm mx-8">
                  Complete the form and click “calculate repayments” to see what
                  your monthly repayments would be.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
