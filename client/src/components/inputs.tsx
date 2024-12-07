import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Product } from "../types/types";
import { ProductTable } from "./product";


export const Input = () => {
    const [month, setMonth] = useState("march");
    const [searchText, setSearchText] = useState(""); // State for search input
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // State for filtered products
    const [isMarch, setIsMarch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!month) return;

            setIsLoading(true);
            try {
                const response = await api.get(`/product?month=${month}`);
                const data = response.data;
                setProducts(data.data || []);
                setFilteredProducts(data.data || []); // Initialize filtered products
                setMessage(data.message || "Products fetched successfully.");
                setIsMarch(month === "march");
                setError("");
            } catch (err: any) {
                console.error("Error fetching products:", err);
                setProducts([]);
                setFilteredProducts([]);
                setMessage("");
                setError(err.response?.data?.message || "Failed to fetch products.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [month]);

      setTimeout(() => {
        setMessage("");
      }, 2000);


    // Filter products based on search input
    useEffect(() => {
        if (searchText.trim() === "") {
            setFilteredProducts(products); // Show all products if search is empty
        } else {
            const filtered = products.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchText.toLowerCase()) ||
                    product.price.toString().includes(searchText)
            );
            setFilteredProducts(filtered);
        }
    }, [searchText, products]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value);
    };

    return (
        <div>
            <div className="flex justify-between items-center py-4 px-8 bg-gray-200 rounded-lg">
                {/* Search input */}
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by title, description, or price"
                        value={searchText}
                        onChange={handleSearchChange}
                        className="border-2 border-gray-400 rounded-lg px-4 py-2"
                    />
                </div>

                {/* Month select */}
                <div className="w-1/2  md:flex justify-end">
                    <select
                        className="border-2 border-gray-400 rounded-lg px-4 py-2"
                        value={month}
                        onChange={handleMonthChange}
                    >
                        <option value="january">January</option>
                        <option value="february">February</option>
                    {isMarch && <option value="march" selected>March</option>}
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

               {/* Message */}
            {message && (
                <div className="flex justify-center items-center py-4 px-8 bg-gray-200 rounded-lg">  
                    <div className="text-xl text-green-600">{message}</div>  
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="flex justify-center items-center py-4 px-8 bg-gray-200 rounded-lg">
                    <div className="text-xl text-red-600">{error}</div>
                </div>
            )}


            {/* Loading state */}
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                filteredProducts.map((product: Product) => (
                    <div key={product.id} className="flex justify-between items-center py-4 px-8 bg-gray-200 rounded-lg">
                        <ProductTable {...product} />
                    </div>
                ))
            )}
            
        </div>
    );
};
