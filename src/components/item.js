import React from 'react';
import axios from 'axios';
import './item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import StarRatingComponent from 'react-star-rating-component';

class Item extends React.Component {
  state = {
    items: [],
    showDetails: false,
    currItem: null,
    isActive: false
  };

  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products?limit=5`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  handleDetails(item) {
    this.setState({ showDetails: !this.state.showDetails, currItem: item, isActive: !this.state.isActive });
  }

  render() {
    let itemDetails;
    if (this.state.showDetails) {
      itemDetails = (
        <div className="item-detail-container">
          <div className="top-details">
            <div className="item-price">${this.state.currItem.price}</div>
            <div>{this.state.currItem.description}</div>
            <div className="item-ratings">
              {/* <div>{this.state.currItem.rating.rate}</div> */}
              <StarRatingComponent name="rate1" starCount={5} value={this.state.currItem.rating.rate} onStarClick={null} />
              <div>({this.state.currItem.rating.count})</div>
            </div>
          </div>
          <button className="cart-button">Add to cart</button>
        </div>
      );
    }
    return (
      <div className="item-container">
        <div className="item-list">
          {this.state.items.map((item) => (
            <div className="item" key={item.id} onClick={() => this.handleDetails(item)}>
              <img className="item-image" src={`${item.image}`}></img>
              <p className="item-title">{item.title}</p>
              <FontAwesomeIcon
                className={this.state.isActive && this.state.currItem == item ? 'chevron-right-active' : 'chevron-left'}
                icon={this.state.isActive && this.state.currItem == item ? faChevronRight : faChevronLeft}
              />
            </div>
          ))}
        </div>
        {itemDetails}
      </div>
    );
  }
}

export default Item;
