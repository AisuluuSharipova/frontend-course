import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, title: 'The Broken Sword' },
        { id: 2, title: 'Pride and Prejudice' },
        { id: 3, title: '1984' },
        { id: 4, title: 'The Catcher in the Rye' },
        { id: 5, title: 'Moby Dick' },
        { id: 6, title: 'The Great Gatsby' },
        { id: 7, title: 'To Kill a Mockingbird' },
        { id: 8, title: 'Ulysses' },
        { id: 9, title: 'The Odyssey' },
        { id: 10, title: 'War and Peace' },
        { id: 11, title: 'Crime and Punishment' },
        { id: 12, title: 'Harry Potter' },
        { id: 13, title: 'The Alchemist' },
        { id: 14, title: 'The Hobbit' },
        { id: 15, title: 'Brave New World' },
        { id: 16, title: 'The Picture of Dorian Gray' },
        { id: 17, title: 'Dracula' },
        { id: 18, title: 'Frankenstein' },
        { id: 19, title: 'The Brothers Karamazov' },
        { id: 20, title: 'The Little Prince' },
      ];
      setData(mockData); 
    };
    
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
