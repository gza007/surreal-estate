import React from 'react';
// import { Button, Form } from 'react-bootstrap';
import '../styles/addProperty.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        bedrooms: 0,
        bathrooms: 0,
        price: '',
        city: 'Manchester',
        email: '',
      },
    };
  }

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  render() {
    return (
      <div className="AddProperty">
        Add Property Page
        <div className="AddPropertyForm">
          <label>
            <h1 className="heading">Add Your Property<span>Complete the Form and Click Submit!</span></h1>
            <form onSubmit={this.handleAddProperty}>
              <div className="inner-wrap">
                <label>
                  Advert Title:
                  <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="e.g. 3 bed house for sale" type="text" />
                </label>
                <label>
                  Type of Property:
                  <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
                    <option value="Flat">Flat</option>
                    <option value="Detached">Detached</option>
                    <option value="Semi-Detached">Semi-Detached</option>
                    <option value="Terraced">Terraced</option>
                    <option value="End of Terrace">End of Terrace</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Bungalow">Bungalow</option>
                  </select>
                </label>
                <div className="field-style field-split align-left">
                  <label>
                    Number of Bedrooms:
                    <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} type="number" />
                  </label>
                </div>
                <div className="field-style field-split align-right">
                  <label>
                    Number of Bathrooms:
                    <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} type="number" />
                  </label>
                </div>
                <label>
                  Price:
                  <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} placeholder="e.g. £300,000" type="text" />
                </label>
                <label>
                  Select Location of Property:
                  <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
                    <option value="Manchester">Manchester</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Sheffield">Sheffield</option>
                    <option value="Liverpool">Liverpool</option>
                  </select>
                </label>
                <label>
                  Email:
                  <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="e.g. johnsmith@hotmail.com" type="email" />
                </label>
                <button type="Submit">Submit</button>
              </div>
            </form>
          </label>
        </div>
      </div>
    );
  }
}

export default AddProperty;
