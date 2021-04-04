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
      {parkingLots.length > 0 ?
      parkingLots.map((lot) => {
        return (
          <div key={lot.alias}>
            {`Star Rating = ${lot.rating}`}
            {`Review Count= ${lot.review_count}`}
            {`Address = ${lot.location.address1}`}
            {`Yelp URL = ${lot.url}`}
            <img src={lot.image_url} />
            <hr />
          </div>
        )
      })
      : <div>Please enter a location to get a list of parking lots</div>}
    </div>
  )
}
