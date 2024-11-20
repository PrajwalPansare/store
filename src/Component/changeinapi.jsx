import React, { useState } from 'react';
import axios from 'axios';

const Changeinapi = ({ setCategory, setError }) => {
  const [inputtype, setInputId] = useState('');

  const handleInputChange = (event) => {
    setInputId(event.target.value);
  };

  const handleSearch = () => {
    if (inputtype.trim() === '') {
      setError('Please enter a valid Type.');
      setCategory([]);  // Clear previous results on new search
      return;
    }

    axios
      .get(`http://localhost:2400/Search_category/${inputtype}`)
      .then((res) => {
        setCategory(res.data.category); // Set search results
        setError(''); // Clear error message if results found
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setCategory([]); // Clear results on error
        setError('No results found. Please try another search.');
      });
  };

  return (
    <div className="flex items-center space-x-4 ml-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-lg bg-white w-48"
        value={inputtype}
        onChange={handleInputChange}
        placeholder="Enter Type"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-red-500 p-2 rounded-lg shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring"
      >
        Search
      </button>
    </div>
  );
};

export default Changeinapi;
