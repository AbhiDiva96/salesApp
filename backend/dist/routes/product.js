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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const month_1 = require("../lib/month");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.get('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { month } = req.query;
    if (!month) {
        res.status(400).json({ message: "month is required" });
    }
    try {
        const data = yield (0, month_1.extractMonthlyProducts)(month);
        res.status(200).json({ message: "fetched successfully", data });
    }
    catch (error) {
        console.log("error :", error);
        res.status(500).json({ message: "error" });
    }
}));
exports.ProductRouter.get('/product/stats', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { month } = req.query;
    if (!month) {
        res.status(400).json({ message: "month is required" });
    }
    try {
        let totalSales = 0;
        let totalSoldItems = 0;
        const data = yield (0, month_1.extractMonthlyProducts)(month);
        yield data.filter((item) => {
            if (item.sold) {
                totalSales += item.price;
                totalSoldItems++;
            }
            return totalSales;
        });
        const totalItem = data.length;
        const notSoldItems = totalItem - totalSoldItems;
        res.status(200).json({ message: "fetched successfully",
            totalSales,
            totalItem,
            totalSoldItems,
            notSoldItems
        });
    }
    catch (error) {
        console.log("error :", error);
        res.status(500).json({ message: "error" });
    }
}));
exports.ProductRouter.get('/product/chart', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { month } = req.query;
    if (!month) {
        res.status(400).json({ message: "month is required" });
    }
    try {
        const data = yield (0, month_1.extractMonthlyProducts)(month);
        const priceRange = [
            { price: "0-100", noOfItems: 0 },
            { price: "101-200", noOfItems: 0 },
            { price: "201-300", noOfItems: 0 },
            { price: "301-400", noOfItems: 0 },
            { price: "401-500", noOfItems: 0 },
            { price: "501-600", noOfItems: 0 },
            { price: "601-700", noOfItems: 0 },
            { price: "701-800", noOfItems: 0 },
            { price: "801-900", noOfItems: 0 },
            { price: "901-above", noOfItems: 0 },
        ];
        data.forEach((item) => {
            const price = item.price;
            if (price >= 0 && price <= 100) {
                priceRange[0].noOfItems++;
            }
            else if (price > 100 && price <= 200) {
                priceRange[1].noOfItems++;
            }
            else if (price > 200 && price <= 300) {
                priceRange[2].noOfItems++;
            }
            else if (price > 300 && price <= 400) {
                priceRange[3].noOfItems++;
            }
            else if (price > 400 && price <= 500) {
                priceRange[4].noOfItems++;
            }
            else if (price > 500 && price <= 600) {
                priceRange[5].noOfItems++;
            }
            else if (price > 600 && price <= 700) {
                priceRange[6].noOfItems++;
            }
            else if (price > 700 && price <= 800) {
                priceRange[7].noOfItems++;
            }
            else if (price > 800 && price <= 900) {
                priceRange[8].noOfItems++;
            }
            else if (price > 900) {
                priceRange[9].noOfItems++;
            }
        });
        res.status(200).json({ message: "fetched successfully",
            month,
            data: priceRange
        });
    }
    catch (error) {
        console.log("error :", error);
    }
}));
