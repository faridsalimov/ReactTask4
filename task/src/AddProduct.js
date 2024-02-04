import React, { Component } from 'react';
import { products } from './data';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      description: '',
      image: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddProduct = () => {
    const { name, price, description, image } = this.state;

    if (name && price && description && image) {
      const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        description,
        image,
      };

      products.push(newProduct);

      this.setState({
        name: '',
        price: '',
        description: '',
        image: '',
      });

      console.log(products);
    } else {
      alert('Please fill in all fields before adding a product.');
    }
  };

  render() {
    return (
      <div>
        <section className="admin-container">
          <form>
            <p>Name</p>
            <input
              id="name"
              type="text"
              placeholder="enter product name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />

            <p>Price</p>
            <input
              id="price"
              type="text"
              placeholder="enter product price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />

            <p>Description</p>
            <input
              id="description"
              type="text"
              placeholder="enter product description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            
            <p>Image (URL)</p>
            <input
              id="image"
              type="text"
              placeholder="enter product image"
              value={this.state.image}
              onChange={this.handleInputChange}
            />

            <input
              id="add-button"
              type="button"
              className="button"
              value="Add"
              onClick={this.handleAddProduct}
            />
          </form>
        </section>
      </div>
    );
  }
}
