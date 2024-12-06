
import {Product} from '../types/type';
import axios from 'axios';

export const extractMonthlyProducts = async( month: string) => {

   try{
      const responses = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    
        const data = await responses.data;

  const monthMap: { [key: string]: number } = {
        january: 0,
        february: 1,
        march: 2,
        april: 3,
        may: 4,
        june: 5,
        july: 6,
        august: 7,
        september: 8,
        october: 9,
        november: 10,
        december: 11,
    };

    const monthIndex = monthMap[month.toLowerCase()];
    if(monthIndex === -1 || monthIndex === undefined){
         console.log(`Invalid month ${month}`);
      }

      //get product according to month
      const FilterProduct = data.filter((product: any) => {
           const saleDate = new Date(product.dateOfSale); // Convert dateOfSale to Date object
        return saleDate.getMonth() === monthIndex; 
      })

      return FilterProduct;
          
    }catch(error){
        console.log("Error :", error);
    }
}