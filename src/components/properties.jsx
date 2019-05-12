import React, { Fragment } from 'react';
import PropertyCard from './propertyCard';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      // favourites: [],
      // search: '',
      isError: false,
      // saveError: false,
    };
  }

  getProperties = () => {
    axios.get(`${URL}/PropertyListing`)
      .then(({ data: properties }) => {
        this.setState({ properties });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  };

  componentDidMount() {
    this.getProperties();
  }

  render() {
    return (
      <Fragment>
        <div className="properties">
          {this.state.properties.map(property => {
            return (
              <PropertyCard
                // userId={this.props.userId}
                key={property._id}
                // onSaveProperty={this.handleSaveProperty}
                // onRemoveProperty={this.handleRemoveProperty}
                // isFavourite={this.checkFavourite(property._id)}
                {...property} // use of spread operator from walkthrough
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Properties;
