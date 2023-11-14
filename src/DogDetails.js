import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((dog) => dog.name === name);

  if (!dog) {
    return (
      <div>
        <h2>Dog not found</h2>
        <Link to="/dogs">Back to Dog List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.img} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <h3>Facts:</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to Dog List</Link>
    </div>
  );
};

export default DogDetails;
