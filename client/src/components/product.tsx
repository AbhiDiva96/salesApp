import { Product } from "../types/types";

export const ProductTable = ({ id, title, description, price, category, sold, image }: Product) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 items-center border border-gray-300 rounded-lg p-4">
                {/* ID */}
                <div className="md:col-span-1 text-center text-sm font-medium">{id}</div>
                {/* Title */}
                <div className="md:col-span-2 text-center text-sm font-medium">{title}</div>
                {/* Description */}
                <div className="md:col-span-4 sm:col-span-2 text-center text-sm">{description}</div>
                {/* Price */}
                <div className="md:col-span-1 sm:col-span-1 text-center text-sm font-medium text-green-600">
                    ${price}
                </div>
                {/* Category */}
                <div className="md:col-span-2 sm:col-span-1 text-center text-sm">{category}</div>
                {/* Sold Status */}
                <div className="md:col-span-1 sm:col-span-1 text-center text-sm font-medium">
                    {sold ? (
                        <span className="text-green-500">Sold</span>
                    ) : (
                        <span className="text-red-500">Not Sold</span>
                    )}
                </div>
                {/* Image */}
                <div className="md:col-span-1 sm:col-span-2 flex justify-center items-center">
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
