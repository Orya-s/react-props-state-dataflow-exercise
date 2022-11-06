import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */
    
    render() {
        let hottest_item = this.props.store.find(i => i.hottest == true);
        
        return <div>Welcome, {this.props.name}. The hottest item is {hottest_item.item} for ${hottest_item.price}.</div>
    }
}

export default Landing