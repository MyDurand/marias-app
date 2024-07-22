import React from 'react';
import data from './data.json';

function RestaurantList() {
  return (
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {data.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Location: {restaurant.location}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;