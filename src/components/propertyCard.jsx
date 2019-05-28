import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSign,
  faBed,
  faBath,
  faPoundSign,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
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
      <h1 className="title">{title}</h1>
      <div className="inner-wrap">
        <div className="card-header-wrap">
          <div className="card-header">
            <FontAwesomeIcon icon="sign" className="logo-icon" />
          </div>
        </div>
        <div>
          <span className="city">{city}</span>
        </div>
        <div>
          <span className="type">{type}</span>
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
      <a className="email-button" type="submit" href={`mailto:${email}?Subject=Someone%20is%20interested%20in%20your%20${title} target="_top"`}>
        <FontAwesomeIcon icon="envelope" />
      </a>
    </div>
  );
};

export default PropertyCard;
