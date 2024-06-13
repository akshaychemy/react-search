import React, { useState } from 'react';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter(item => 
      item.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {
        filteredData.length === 0 && searchTerm.length > 0
         ? <div>
            No results found
         </div>
          : ''
      }
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
