import React, { useState } from "react"
import { FlowChart } from "./chart";

export const BarChart = () => {

    const [month , setMonth] = useState("march");

    const handleMonthBarChartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value);
    }
    return (
        <div>
             <div className="flex justify-between items-center py-4 px-8 bg-gray-200 rounded-lg">
                <div className="text-xl">
                    Bar Chart Stats - 
                    <span className="text-green-600 font-bold">
                     {month}    
                    </span>
                </div> 
                <div>
                    <select 
                    value={month}
                    onChange={handleMonthBarChartChange}
                    className="border-2 border-gray-400 rounded-lg px-4 py-2"
                    >
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march" selected>March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>  
                        <option value="december">December</option>
                    </select>
                </div>
           </div>


          <FlowChart  month={month}/>
        </div>
    )
}