import React, { useState, useEffect } from 'react'
import CardItem from './CardItem';

function Movies() {
  const [data, setData] = useState([]);
  async function fetchData() {
          const url = 'https://hoblist.com/api/movieList'; // Replace with your API endpointssssssss
      const requestData = {
        "category": 'movies',
        "language": 'kannada',
        "genre":'all',
        "sort":'voting'
      }
    await fetch(`${url}`,{
      method: "POST",
      body: JSON.stringify(requestData),
      headers:{
          "Content-Type":"application/json",
      },
  })
      .then((res)=>res.json())
      .then((out)=>{
          // alert("data loaded successfully👍");
          console.log(out)
          setData(out.result)
      })
      .catch((err)=>console.log(err.message));
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='container-fluid'>
      {/* Render the data or display a loading state */}
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">
              Movie List
          </h3>
        </div>
      </div>

      <div className="row">
          {
              data && data.map((item,index) => {

                return (
                    <CardItem key={index} {...item} />
                )
              })
          }
      </div>
    </div>
  );
  
}

export default Movies
