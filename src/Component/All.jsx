import React, { useEffect, useState } from "react";
import axios from "axios";

const All = () => {
    const [Category, setCategory] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [InputFName, setInputFName] = useState("");
    const [InputPrice, setInputPrice] = useState("");

    useEffect(() => {
        axios.get("http://localhost:2400/option_category")
            .then((res) => {
                console.log("Data fetched: ", res.data.allcategory); // Log the fetched data
                setCategory(res.data.allcategory); // Set the 'allcategory' data
                setFilteredCategory(res.data.allcategory); // Display all data initially
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setCategory([]); // Set an empty array on error
                setFilteredCategory([]); // Clear filtered data on error
            });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleNameInputChange = (event) => {
        setInputFName(event.target.value);
    };

    const handlePriceInputChange = (event) => {
        setInputPrice(event.target.value);
    };

    const handleSearch = () => {
        const Fname = InputFName.trim().toLowerCase();
        const Fprice = parseInt(InputPrice, 10);
        const categorySearch = selectedCategory;

        const filtered = Category.filter(r => {
            return (
                (categorySearch === "" || r.category === categorySearch) &&
                (Fname === "" || r.foodName.toLowerCase() === Fname) &&
                (isNaN(Fprice) || r.discountedPrice <= Fprice)
            );
        });

        setFilteredCategory(filtered);
    };

    return (
        <>
            <div className=" py-2 mt-5 mx-32 mb-3  bg-yellow-500 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center rounded-full ">
                <div className="w-full sm:w-auto">
                    <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Select Category</label>
                    <select
                        id="category"
                        name="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="block w-full sm:w-auto bg-white border border-gray-300 text-gray-900 py-1 px-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Select category</option>
                        <option value="Ladoo">Ladoo</option>
                        <option value="Namkeen">Namkeen</option>
                        <option value="Chips">Chips</option>
                        <option value="Pastries">Pastries</option>
                        <option value="Breakfast Items">Breakfast Items</option>
                        <option value="Fruit Snacks">Fruit Snacks</option>
                        <option value="Cookies">Cookies</option>
                        <option value="Muffins">Muffins</option>
                    </select>
                </div>

                <div className="w-full sm:w-auto">
                    <label htmlFor="foodName" className="block text-gray-700 font-medium mb-2">Food Name</label>
                    <input
                        type="text"
                        id="foodName"
                        value={InputFName}
                        onChange={handleNameInputChange}
                        placeholder="Food Name"
                        className="block w-full sm:w-auto bg-white border border-gray-300 text-gray-900 py-1 px-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="w-full sm:w-auto">
                    <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price</label>
                    <input
                        type="text"
                        id="price"
                        value={InputPrice}
                        onChange={handlePriceInputChange}
                        placeholder="Price"
                        className="block w-full sm:w-auto bg-white border border-gray-300 text-gray-900 py-1 px-3 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="w-full sm:w-auto mt-4 flex justify-end">
                    <button
                        onClick={handleSearch}
                        disabled={Category.length === 0}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring disabled:bg-gray-400"
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="px-32">
                {filteredCategory.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredCategory.map(data => (
                            <div key={data.id} className="card bg-white p-4 rounded-lg shadow-md">
                                <div className="flex flex-col items-center">
                                    <img className="h-32 w-32 object-cover mb-4" src={data.img} alt={data.foodName} />
                                    <h3 className="text-lg font-semibold">{data.foodName}</h3>
                                </div>
                                <div className="mt-4 text-center">
                                    <h4 className="text-lg text-gray-500">{data.foodType}</h4>
                                    <p className="text-md ">{data.description}</p>
                                    <div className="text-xl font-bold text-gray-700">
                                        <p className="">Rs.<s>{data.price}</s> <br/> Rs.{data.discountedPrice}</p>
                                    </div>
                                    <button className="bg-yellow-400 w-32 hover:bg-red-600 rounded-lg">Add Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No category found</p>
                )}
            </div>
        </>
    );
};

export default All;
