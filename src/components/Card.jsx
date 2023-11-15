import React from 'react';
import '../style/Card.css';
import starfilled from '../assets/star-filled.svg';
import starempty from '../assets/star.svg';

const Card = ({ name, description, review, phone, email, price, location, availability, starred, image }) => {
  let badgeText = availability ? "SOLD OUT" : "AVAILABLE";

  const ReviewStars = ({ review }) => {
    return <div>Review: {Array(review).fill('★').join('')}</div>;
  };

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="fav-div">
        {starred ? <img src={starfilled} width="30px" alt="Star Icon" /> : <img src={starempty} width="30px" alt="Star Icon" />}
      </div>
      <img src={image} alt={name} loading="lazy" />
      <div className="card-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <ReviewStars review={review} />
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Price: ${price}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default Card;
