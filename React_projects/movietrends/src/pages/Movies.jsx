import React, { useState, useEffect } from 'react'
import Footer from './Footer'

function Movies() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
    {data.map((item) => (
      <div key={item.id}>{item.name}</div>
    ))}
    <Footer/>
  </div>
  )
}

export default Movies
