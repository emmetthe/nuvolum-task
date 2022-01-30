import React from 'react';
import axios from 'axios';
import './item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Item extends React.Component {
  state = {
    items: [],
    showDetails: false,
    currItem: null
  };

  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products?limit=5`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  handleDetails(item) {
    this.setState({ showDetails: !this.state.showDetails, currItem: item });
  }

  render() {
    let itemDetails;
    if (this.state.showDetails) {
      itemDetails = (
        <div className="item-detail-container">
          <div>${this.state.currItem.price}</div>
          <div>{this.state.currItem.description}</div>
          <div>{this.state.currItem.rating.rate}</div>
          <div>({this.state.currItem.rating.count})</div>
          <button>Add to cart</button>
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
              <FontAwesomeIcon className="chevron-right" icon={faChevronRight} />
            </div>
          ))}
        </div>
        {itemDetails}
      </div>
    );
  }
}

export default Item;
