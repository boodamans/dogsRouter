import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h2>Dog List</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <img src={dog.img} alt={dog.name} />
            <Link to={`/dogs/${dog.name}`}>
              <p>{dog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;

