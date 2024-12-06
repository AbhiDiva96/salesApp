"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractMonthlyProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const extractMonthlyProducts = (month) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responses = yield axios_1.default.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = yield responses.data;
        const monthMap = {
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
        if (monthIndex === -1 || monthIndex === undefined) {
            console.log(`Invalid month ${month}`);
        }
        //get product according to month
        const FilterProduct = data.filter((product) => {
            const saleDate = new Date(product.dateOfSale); // Convert dateOfSale to Date object
            return saleDate.getMonth() === monthIndex;
        });
        return FilterProduct;
    }
    catch (error) {
        console.log("Error :", error);
    }
});
exports.extractMonthlyProducts = extractMonthlyProducts;
