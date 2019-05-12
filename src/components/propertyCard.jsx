import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign, faBed, faBath, faPoundSign, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/propertyCard.css';

library.add(faSign, faBed, faBath, faPoundSign, faEnvelope);

const PropertyCard = ({
//   _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
//   userId,
//   onSaveProperty,
//   onRemoveProperty,
//   isFavourite,
}) => {
  return (
    <div className="property-card">
      <div className="header">
        <FontAwesomeIcon icon="sign" className="logo-icon fa-lg" />
      </div>
      <h3 className="title">{title}</h3>
      <div>
        <span className="type">{type}</span>
      </div>
      <div>
        <span className="city">{city}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="bath" />
        <span className="bathrooms">{bathrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="bed" />
        <span className="bedrooms">{bedrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="pound-sign" />
        <span className="price">{price}</span>
      </div>
      <div className="email">{email}</div>
      <a className="email-button" href={`mailto:${email}?Subject=Someone%20is%20interested%20in%20your%20${title} target="_top"`}>
        <FontAwesomeIcon icon="envelope" />
        <span>Email</span>
      </a>
      {/* {userId && isFavourite === true &&
          (
            <div className="save-button remove-button" onClick={() => onRemoveProperty(_id)}>
              <FontAwesomeIcon icon="star" />
              <span>Saved Properties</span>
            </div>
          )
        }
        { userId && !isFavourite &&
          (
            <div className="save-button" onClick={() => onSaveProperty(_id)}>
              <FontAwesomeIcon icon="star" />
              <span>Save</span>
            </div>
          )
        } */}
    </div>
  );
};

export default PropertyCard;
