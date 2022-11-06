import React, { Component } from 'react';

class Item extends Component {
    render() {
        let priceWithDiscount = (this.props.data.price) * (1 - this.props.data.discount);
        let price = this.props.shouldDiscount ? priceWithDiscount : this.props.data.price;
        return <div>{this.props.data.item}: ${price}</div>
    }
}

export default Item