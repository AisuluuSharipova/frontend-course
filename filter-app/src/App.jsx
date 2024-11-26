import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, title: 'War and Peace' },
      { id: 2, title: 'Pride and Prejudice' },
      { id: 3, title: '1984' },
      { id: 4, title: 'The Catcher in the Rye' },
      { id: 5, title: 'Moby Dick' },
      { id: 6, title: 'The Great Gatsby' },
      { id: 7, title: 'To Kill a Mockingbird' },
      { id: 8, title: 'Ulysses' },
      { id: 9, title: 'The Odyssey' },
      { id: 10, title: 'Crime and Punishment' },
    ];
    setData(mockData);
    setFilteredData(mockData); 
  }, []);


  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]); 

  return (
    <div>
      <h1>Filter Books</h1>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
