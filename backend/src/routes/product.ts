import { response, Router } from "express";
import { extractMonthlyProducts } from "../lib/month";

export const ProductRouter = Router();

ProductRouter.get('/product', async (req:any, res: any) => {
     
       const {month} =  req.query;

       if(!month){
           res.status(400).json({message: "month is required"});
       }

          try{
            const data = await extractMonthlyProducts(month);
              res.status(200).json({message: "fetched successfully", data});

        }catch(error){
            console.log("error :", error);
            res.status(500).json({message: "error"});
        }

       
})