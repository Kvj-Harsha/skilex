// Page.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const profiles = [
  { name: 'John Doe', email: 'john@example.com', city: 'Mumbai', state: 'Maharashtra', avatar: '/john.png', rating: 6.5, skills: 'Insta reel editor' },
  { name: 'Jane Smith', email: 'jane@example.com', city: 'Hyderabad', state: 'Telangana', avatar: '/jane.png', rating: 7.2, skills: 'Cinema editor' },
  { name: 'Michael Johnson', email: 'michael@example.com', city: 'Vijayawada', state: 'Andhra Pradesh', avatar: '/michael.png', rating: 8.9, skills: 'Short film editor' },
  { name: 'John Doe', email: 'john@example.com', city: 'Kolkata', state: 'West Bengal', avatar: '/john.png', rating: 7.8, skills: 'YouTube editor' },
  { name: 'Jane Smith', email: 'jane@example.com', city: 'Kolkata', state: 'West Bengal', avatar: '/jane.png', rating: 9.1, skills: 'VFX editor' },
  { name: 'Michael Johnson', email: 'michael@example.com', city: 'Chennai', state: 'Tamil Nadu', avatar: '/michael.png', rating: 6.7, skills: 'Insta reel editor' },
  { name: 'John Doe', email: 'john@example.com', city: 'Bangalore', state: 'Karnataka', avatar: '/john.png', rating: 8.4, skills: 'Cinema editor' },
  { name: 'Jane Smith', email: 'jane@example.com', city: 'Raichur', state: 'Karnataka', avatar: '/jane.png', rating: 6.9, skills: 'Short film editor' },
  { name: 'Michael Johnson', email: 'michael@example.com', city: 'Hyderabad', state: 'Telangana', avatar: '/michael.png', rating: 7.5, skills: 'YouTube editor' },
  // Add more profiles as needed
];

const cities = [
  { city: 'Hyderabad', state: 'Telangana' },
  { city: 'Mumbai', state: 'Maharashtra' },
  { city: 'Vijayawada', state: 'Andhra Pradesh' },
  { city: 'Kolkata', state: 'West Bengal' },
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Bangalore', state: 'Karnataka' },
  { city: 'Raichur', state: 'Karnataka' },
  // Add more cities as needed
];

const LocationButton = ({ onLocationSelect }) => {
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: `${latitude}+${longitude}`,
          key: 'f3e2e0b3c6a6481abe6558f9e8112cba', // Replace with your OpenCage API key
        }
      });

      if (response.data.results && response.data.results.length > 0) {
        const { city, state } = response.data.results[0].components;
        onLocationSelect({ city, state });
        setError(null);
      } else {
        setError("Location information is unavailable.");
      }
    } catch (err) {
      setError("Failed to fetch location information.");
    }
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
      default:
        setError("An error occurred.");
        break;
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={getLocation}
      >
        Detect My Location
      </button>
      {error && (
        <div className="mt-4 p-4 border rounded shadow-md bg-gray-100">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sortedProfiles, setSortedProfiles] = useState(profiles);

  useEffect(() => {
    if (selectedLocation) {
      const sorted = profiles
        .map(profile => ({
          ...profile,
          distance: calculateDistance(
            profile.city,
            profile.state,
            selectedLocation.city,
            selectedLocation.state
          )
        }))
        .sort((a, b) => {
          if (a.city === selectedLocation.city && a.state === selectedLocation.state) return -1;
          if (b.city === selectedLocation.city && b.state === selectedLocation.state) return 1;
          return a.distance - b.distance;
        });
      setSortedProfiles(sorted);
    }
  }, [selectedLocation]);

  const calculateDistance = (city1, state1, city2, state2) => {
    // Simplified distance calculation for demonstration purposes
    if (city1 === city2 && state1 === state2) return 0;
    return Math.random() * 1000; // Random distance for now
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleCityChange = (event) => {
    const [city, state] = event.target.value.split(', ');
    setSelectedLocation({ city, state });
  };

  return (
    <div className="p-4">
      <div className="text-3xl text-[#D8D8F6]">
        Welcome to Video Editing!
      </div>
      <div>
        <section>
          {/* <p>This is to create map and nearest users</p> */}
          <div className="mt-4">
            <label htmlFor="city" className="block mb-2">Select City:</label>
            <select
              id="city"
              className="border p-2 rounded"
              onChange={handleCityChange}
            >
              <option value="">--Select a city--</option>
              {cities.map((city, index) => (
                <option key={index} value={`${city.city}, ${city.state}`}>
                  {city.city}, {city.state}
                </option>
              ))}
            </select>
          </div>
          <LocationButton onLocationSelect={handleLocationSelect} />
          <div className="mt-4">
            <h2 className="text-2xl mb-2">Profiles:</h2>
            {sortedProfiles.map((profile, index) => (
              <div key={index} className="border p-4 rounded mb-4 flex items-center">
                <img src={profile.avatar} alt={`${profile.name}'s avatar`} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p><strong>#{index + 1}</strong></p>
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <p><strong>Location:</strong> {profile.city}, {profile.state}</p>
                  <p><strong>Rating:</strong> {profile.rating}</p>
                  <p><strong>Skills:</strong> {profile.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
