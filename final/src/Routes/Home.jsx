import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const Home = () => {
  
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setApi(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="home">
    <h1>Home</h1>
    <div className="card-grid">
      {api.map((dentist) => (
        <Card key={dentist.id} {...dentist} />
      ))}
    </div>
  </main>
    );
  };

export default Home