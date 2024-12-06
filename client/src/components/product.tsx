import { Product } from "../types/types";

export const ProductTable = ({ id, title, description, price, category, sold, image }: Product) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-12 gap-4 items-center border border-gray-300 rounded-lg p-4">
                {/* ID */}
                <div className="col-span-1 text-center text-sm font-medium">{id}</div>
                {/* Title */}
                <div className="col-span-2 text-center text-sm font-medium">{title}</div>
                {/* Description */}
                <div className="col-span-4 text-center text-sm">{description}</div>
                {/* Price */}
                <div className="col-span-1 text-center text-sm font-medium text-green-600">${price}</div>
                {/* Category */}
                <div className="col-span-2 text-center text-sm">{category}</div>
                {/* Sold Status */}
                <div className="col-span-1 text-center text-sm font-medium">
                    {sold ? (
                        <span className="text-green-500">Sold</span>
                    ) : (
                        <span className="text-red-500">Not Sold</span>
                    )}
                </div>
                {/* Image */}
                <div className="col-span-1 flex justify-center items-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-16 h-16 object-cover rounded"
                    />
                </div>
            </div>
        </div>
    );
};
