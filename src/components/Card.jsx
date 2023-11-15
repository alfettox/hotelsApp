import React, { useState } from 'react';
import '../style/Card.css';
import starfilled from '../assets/star-filled.svg';
import starempty from '../assets/star.svg';

const Card = ({ name, description, review, phone, email, price, location, availability, starred, image }) => {
  let badgeText = availability ? "AVAILABLE" : "SOLD OUT";
  let cardClassName = availability ? "card" : "card sold-out";

  const ReviewStars = ({ review }) => {
    return <div>Review: {Array(review).fill('★').join('')}</div>;
  };

  const [isFavorite, setFavorite] = useState(starred);

  const favoriteListener = () => {
    if (availability) {
      setFavorite(!isFavorite);
      // You may want to handle the favorite state change here, such as updating it in your data or making an API call
    }
  };

  return (
    <div className={cardClassName}>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="fav-div" onClick={favoriteListener} style={{ cursor: availability ? 'pointer' : 'default' }}>
        {isFavorite ? <img src={starfilled} width="30px" alt="Star Icon" /> : <img src={starempty} width="30px" alt="Star Icon" />}
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
