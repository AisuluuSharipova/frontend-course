import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>Filter Data</h1>
    </div>
  );
}

export default App;
