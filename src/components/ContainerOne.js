import React from "react";


const ContainerOne = ({ handleSetIncome, handleDropdown, grossIncomeBtn, showContainerTwoThree }) => {


    
    return (
        <>
        <div className="container-1 h-60">
        <h3 className="pl-5 my-4 font-semibold">
            What is your total income?
        </h3>
        <input className="inputIncome bg-violet-200 border-2 rounded-l-lg p-1 ml-5 mt-2 mb-2 outline-none " type="number" min={0} onChange={handleSetIncome} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}></input>
        <select className="dropmenu bg-violet-200 border-2 rounded-r-lg p-1 mt-2 mb-2 outline-none " onChange={handleDropdown}>
            <option value="7">week</option>
            <option value="14">fortnight</option>
            <option value="30">month</option>
            <option value="365">annual</option>
        </select>
        <h3 className="ml-5 mb-2 font-semibold">
            Please choose the income type?
        </h3>
        <div className="flex ml-5 mb-2 w-80">
        <button onClick={grossIncomeBtn} className=" px-4 py-1 bg-violet-200 rounded w-40 hover:bg-violet-300">Gross income</button>
        <button className="pl-4 pr-4 bg-violet-200 rounded w-40 ml-2" disabled={true}>Net income</button>
        </div>
        <button onClick={showContainerTwoThree} className="calculateBtn ml-5 mb-4 py-1 rounded w-80 border-2">Calculate ➝</button>
        </div>
        </>
    )
}

export default ContainerOne