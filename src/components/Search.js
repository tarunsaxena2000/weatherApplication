import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.7rem; 
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 480px;
  margin-top: 10px;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem; 
  border: none;
  background: orange;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  height: 42px; 
  margin-top: 10px;
  font-weight: 400;

  &:hover {
    background: darkorange;
  }
`;

const apiKey = "34cd7c3e8227c970252dba85133938e6"; 

const Search = ({ setWeatherData }) => {
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    if (!location) {
      alert("Please enter a location");
      return;
    }
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setLocation(''); // Clear the search input after setting weather data
    } catch (error) {
      console.error("Error fetching the weather data", error);
      alert("Invalid location or network error");
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city name"
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default Search;
    