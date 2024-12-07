import { useEffect, useState } from "react"
import { api } from "../api/api";


export const Stats = () => {
 
    const [month , setMonth] = useState("march");
const [totalSale, setTotalSale] = useState(0);
const [totalItem, setTotalItem] = useState(0);  
const [totalSold, setTotalSold] = useState(0);
const [notSold, setNotSold] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [message, setMessage] = useState("");
const [error, setError] = useState("");

useEffect(() => {
    const fetchStats = async () => {
        if(!month) return;
        setIsLoading(true);

        try{
          const response = await api.get(`/product/stats/?month=${month}`);
          const data = response.data;
          setTotalSale(data.totalSales);
          setTotalItem(data.totalItem);
          setTotalSold(data.totalSoldItems);
          setNotSold(data.notSoldItems);
          setMessage(data.message || "Stats fetched successfully.");
          setError("");
        } catch {
           setError("Error fetching stats. Please try again later.");
        } finally {
           setIsLoading(false);
        }
    }

    fetchStats();
}, [month]);

const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
};

return <div>
        <div className="flex justify-between items-center py-4 px-8 bg-gray-200 rounded-lg">
            <div className="text-xl">
                Statistics - 
                <span className="text-green-600 font-bold">
                 {month}    
                </span>
            </div> 
            <div>
                <select 
                value={month}
                onChange={handleMonthChange}
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

        {isLoading && (
            <div className="flex justify-center py-4">
                <div className="text-gray-500">Loading stats...</div>
            </div>
        )}

        {!isLoading && error && (
            <div className="flex justify-center py-4">
                <div className="text-red-500">{error}</div>
            </div>
        )}

        {!isLoading && message && !error && (
            <div className="flex justify-center py-4">
                <div className="text-green-500">{message}</div>
            </div>
        )}

        <div className="flex justify-center  rounded-lg py-4 px-8">
           <div className="w-[400px] grid grid-rows-3 justify-center items-center py-4 px-8 bg-yellow-600/30 rounded-lg">
                 <div className="flex grid-cols-2 gap-4 text-xl font-semibold items-center">
                    <div>Total Items</div>
                    <div>{totalItem}</div>
                 </div>
                 <div className="flex justify-between grid-cols-2 gap-20 items-center">
                    <div>Total Sales</div>
                    <div className="font-bold">${totalSale}</div>
                 </div>
                 <div>
                    <div className="flex justify-between grid-cols-2 gap-4 items-center">
                        <div>Total Sold</div>
                        <div className="font-bold">{totalSold}</div>
                    </div>
                    <div className="flex justify-between grid-cols-2 gap-4 items-center">
                        <div>Not Sold</div>
                        <div className="font-bold">{notSold}</div>
                    </div>
                 </div>
                 
            </div>
      
          </div>
    </div>
}