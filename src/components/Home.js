import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.store.map(i => <Item key={i.item} data={i} shouldDiscount={this.props.shouldDiscount}/>)
    }
}

export default Home