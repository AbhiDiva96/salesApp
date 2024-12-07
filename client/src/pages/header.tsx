
function Header() {
    return (
        <div>
            <div className="flex justify-center pt-4">
                <div className="text-3xl cursor-pointer"  onClick={() => window.location.href = "/"}>
                    Sales app
                    </div>
            </div>
          
          <div className="flex justify-center p-6">
            <div className="flex justify-center p-6">
                <button 
                onClick={() => window.location.href = "/stats"}
                className="bg-green-600 text-white rounded-lg px-4 py-2"
                >
                    <div className="text-xl font-bold">Stats</div>
                </button>
            </div>
             <div className="flex justify-center p-6">
                <button 
                onClick={() => window.location.href = "/barchart"}
                className="bg-green-600 text-white rounded-lg px-4 py-2"
                >
                    <div className="text-xl font-bold">BarChart</div>
                </button>
            </div>
          </div>


       </div>
    )
}   

export default Header;