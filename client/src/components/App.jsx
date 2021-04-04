import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search.jsx';

export default function App(props) {
  const [parkingLots, setParkingLots] = useState([]);

  const searchLocation = (searchTerm) => {
    axios.get(`/parking/location/${searchTerm}`)
      .then(results => setParkingLots(results.data.businesses))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div>Air Garage Parking Lots</div>
      <Search searchLocation={searchLocation} />
    </div>
  )
}
