import React, { useState } from 'react';
import ApiService from '../api-service';

import './Pets.css'

export default function Pets(props) {
  const [pets, setPets] = useState({});

  ApiService.getPets().then((res) => setPets({ ...res }));

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target)
    ApiService.removePet(e.target.id)
    ApiService.removeUser()
  }

  if (!pets.cat || !pets.dog) {
    return <p>Loading...</p>;
  }
  return (
    <div className='adopt'>
      <div className="pet">
        <h2>{pets.cat.name}</h2>
        <img src={pets.cat.imageURL} alt="a cat" />
        <ul>
          <li>Breed: {pets.cat.breed}</li>
          <li>Gender: {pets.cat.gender}</li>
          <li>Description: {pets.cat.description}</li>
          <li>Story: {pets.cat.story}</li>
        </ul>
       {props.showAdopt && <button id='cats' onClick={(e) => handleSubmit(e)}>Adopt Me</button>}
      </div>
      <div className="pet">
        <h2>{pets.dog.name}</h2>
        <img src={pets.dog.imageURL} alt="a dog" />
        <ul>
          <li>Breed: {pets.dog.breed}</li>
          <li>Gender: {pets.dog.gender}</li>
          <li>Description: {pets.dog.description}</li>
          <li>Story: {pets.dog.story}</li>
        </ul>
       {props.showAdopt && <button id='dogs' onClick={(e) => handleSubmit(e)}>Adopt Me</button>}
      </div>
    </div>
  );
}
