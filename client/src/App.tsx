import { Input } from "./components/inputs"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Stats } from "./components/stats";
import { BarChart } from "./components/barChart";

function App() {

  return (
    <div>

       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Input />} />
           <Route path="/stats" element={<Stats/>} />
           <Route path="/barchart" element={<BarChart/>} />
         </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App
