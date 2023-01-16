import React, { useEffect, useState } from "react";
import './app.css';
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
import ContainerThree from "./components/ContainerThree";



function App() {

    const [incomeTable, setIncomeTable] = useState([]);

    const tax = 0.2;
    const [income, setIncome] = useState(0);
    const [taxType, setTaxType] = useState(7);
    const [dayIncome, setDayIncome] = useState(0);

    const [net, setNet] = useState(0);


    const handleDropdown = (e) => {
        setTaxType(e.target.value);

        incomeTable.forEach(item => {
            // eslint-disable-next-line no-nested-ternary, no-unused-expressions
            (taxType == 7) ? setNet(item.weekNet)
                // eslint-disable-next-line no-nested-ternary
                : (taxType == 14) ? setNet(item.fortnightlyNet)
                    // eslint-disable-next-line no-nested-ternary
                    : (taxType == 30) ? setNet(item.monthlyNet)
                        : (taxType == 365) ? setNet(item.annuallyNet)
                            : item.weekNet;
        });

        const drops = document.querySelectorAll('.dropmenu');
        for (let i = 0; i < drops.length; i++) {
            drops[i].value = e.target.value;
        }
    };

    const handleSetIncome = (e) => {
        setIncome(e.target.value);
    };

    useEffect(() => {
        setDayIncome(income / taxType);
    }, [taxType]);

    useEffect(() => {
        setDayIncome(income / taxType);
    }, [income]);

    useEffect(() => {
        setIncomeTable([
            {
                weekGross: dayIncome * 7, fortnightlyGross: dayIncome * 14, monthlyGross: dayIncome * 30, annuallyGross: dayIncome * 365,
                weekTax: dayIncome * 7 * tax, fortnightlyTax: dayIncome * 14 * tax, monthlyTax: dayIncome * 30 * tax, annuallyTax: dayIncome * 365 * tax,
                weekNet: (dayIncome * 7) - (dayIncome * 7 * tax), fortnightlyNet: (dayIncome * 14) - (dayIncome * 14 * tax), monthlyNet: (dayIncome * 30) - (dayIncome * 30 * tax), annuallyNet: (dayIncome * 365) - (dayIncome * 365 * tax)
            },
        ]
        );

        setNet((dayIncome * taxType) - (dayIncome * taxType * tax));
    }, [dayIncome]);


    const grossIncomeBtn = () => {
        if (document.querySelector('.inputIncome').value > 0) {
            document.querySelector('.calculateBtn').disabled = false;
            document.querySelector('.calculateBtn').classList.remove("border-2")
            document.querySelector('.calculateBtn').classList.add("bg-violet-200", "hover:bg-violet-300") 
        } else {
            alert('You must enter some income value')
        }
    };

    const showContainerOne = () => {
        document.querySelector('.container-1').classList.remove("hidden")         
        document.querySelector('.container-2').classList.add("hidden")
        document.querySelector('.container-3').classList.add("hidden")   

        document.querySelector('.incometab').classList.add("bg-violet-200")
        document.querySelector('.incomedetailstab').classList.remove("bg-violet-200")
    };

    const showContainerTwoThree = () => {        
        if (document.querySelector('.inputIncome').value > 0 && document.querySelector('.calculateBtn').classList.contains("bg-violet-200")) {
        document.querySelector('.container-1').classList.add("hidden")
        document.querySelector('.container-2').classList.remove("hidden")
        document.querySelector('.container-3').classList.remove("hidden")  
        
        document.querySelector('.incometab').classList.remove("bg-violet-200")
        document.querySelector('.incomedetailstab').classList.add("bg-violet-200")
        } else if(!document.querySelector('.calculateBtn').classList.contains("bg-violet-200")){
            alert('You must enter some income value and click gross income button')
        } else {
            alert('You must enter some income value')
        }
    };
    
    
    const handleDropdownTwo = (e) => {

        if (e.target.value == 7) {
            setNet(incomeTable[0].weekNet);
        }
        if (e.target.value == 14) {
            setNet(incomeTable[0].fortnightlyNet);
        }
        if (e.target.value == 30) {
            setNet(incomeTable[0].monthlyNet);
        }
        if (e.target.value == 365) {
            setNet(incomeTable[0].annuallyNet);
        }



    };



    return (
 
        <div className="flex justify-center mt-24">
            <div>
                <div onClick={showContainerOne} className="incometab h-2/4 border-2 bg-violet-200 h-24 w-10 rounded-l-lg mt-20 text-sm text-bottom text-end cursor-pointer"><p className="-rotate-90 mt-8">Income details</p></div>
                <div onClick={showContainerTwoThree} className="incomedetailstab h-2/4 border-2 h-24 w-10 rounded-l-lg text-sm cursor-pointer"><p className="-rotate-90 mt-10">Income</p></div>
            </div>

            <div className="border-2 rounded ">

                <div className="flex p-5 font-bold bg-violet-300 text-xl pl-8 md:pr-96">
                    <h1>        
                        💰 
                    </h1>
                    <h1 className="pl-16">               
                        Income tax calculator
                    </h1>
                </div>

                <ContainerOne handleSetIncome={handleSetIncome} handleDropdown={handleDropdown} grossIncomeBtn={grossIncomeBtn} showContainerTwoThree={showContainerTwoThree}/>
                {incomeTable.map((tabledata, index) => (<ContainerTwo tabledata={tabledata} net={net} handleDropdownTwo={handleDropdownTwo} key={index} />))}


                <ContainerThree />

            </div>
            </div>
  

    );
}

export default App