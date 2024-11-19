import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating="10"/>
    <StarRating 
      color='red'
      size={30}
      messages={['Terrible', 'Poor', 'Okay', 'Good', 'Satisfied', 'Very Good', 'Excellent', 'Outstanding', 'Exceptional', 'Perfect']}
      className=""
      defaultRating={3}
    />
  </React.StrictMode>
);

