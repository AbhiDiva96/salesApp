// import { useState } from "react"


// export const Pagination = (productCnt: number) => {

//      const [currentPage, setCurrentPage] = useState(1);
 
//      const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//      }

//     return (

//         <div>
//               <div className="flex justify-between items-center py-4 px-8 bg-gray-200 rounded-lg">
//                  <div>
//                     Page No: {currentPage}
//                  </div>

//                  <div className="flex justify-between">
//                     <button onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={productCnt === 0 || currentPage === 1}
//                         >
//                      <div>previous</div>
//                     </button>
//                       <span>-{currentPage}-</span>
//                       <button onClick={() => handlePageChange(currentPage+1)}
//                        disabled={productCnt < 10}
//                        >
//                      <div>next</div>
//                       </button>
//                  </div>
                 
//                  <div>
//                     Per page : {10}
//                  </div>
//               </div>
//         </div>
//     )
// }