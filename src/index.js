import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {

  const [movieRating, setMovieRating] = useState();

  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
      { movieRating > 0 && <p>This movie was rated {movieRating} stars.</p>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={10}/>
    <StarRating 
      color='red'
      size={30}
      messages={['Terrible', 'Poor', 'Okay', 'Good', 'Satisfied', 'Very Good', 'Excellent', 'Outstanding', 'Exceptional', 'Perfect']}
      className=""
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);

