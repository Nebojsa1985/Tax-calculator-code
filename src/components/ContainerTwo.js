import React from "react";


const ContainerTwo = ( { net, tabledata, handleDropdownTwo } ) => {
    let netDecimal = net.toFixed(2)

    return (
        <>
        <div className="container-2 rounded p-5 hidden">
         <div className="flex">
        <button className="pl-4 pr-4 bg-violet-200 rounded md:w-40">$ {netDecimal}</button><p className="pl-2 pr-2">your net</p>
        <select className="dropmenu outline-none text-violet-500" onChange={handleDropdownTwo}>
            <option value="7">week</option>
            <option value="14">fortnight</option>
            <option value="30">month</option>
            <option value="365">annual</option>
        </select>
        <p>income</p>


        </div>
        <div>
            <table className="my-6">
                <thead>
                <tr className="border-b-2  bg-violet-200">
                    <th className="md:pl-2 md:pr-21">Freqency</th>
                    <th className="md:pl-8 md:pr-12">Gross income</th>
                    <th className="md:pl-8 md:pr-12">Tax</th>
                    <th className="md:pl-8 md:pr-12">Net income</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b-2 hover:bg-violet-100">
                    <td className="md:pl-12 md:pr-8">Weekly</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.weekGross).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.weekTax).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.weekNet).toFixed(2)}</td>
                </tr>
                <tr className="border-b-2 hover:bg-violet-100">
                    <td className="md:pl-12 md:pr-8">Fortnightly</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.fortnightlyGross).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.fortnightlyTax).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.fortnightlyNet).toFixed(2)}</td>
                </tr>
                <tr className="border-b-2 hover:bg-violet-100">
                    <td className="md:pl-12 md:pr-8">Monthly</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.monthlyGross).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.monthlyTax).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.monthlyNet).toFixed(2)}</td>
                </tr>
                <tr className="hover:bg-violet-100">
                    <td className="md:pl-12 md:pr-8">Annualy</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.annuallyGross).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.annuallyTax).toFixed(2)}</td>
                    <td className="md:pl-8 md:pr-8">{(tabledata.annuallyNet).toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}

export default ContainerTwo