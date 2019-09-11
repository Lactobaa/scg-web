import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import StarRatings from 'react-star-ratings';

export class Restaurant extends Component {
  async componentWillMount() {
    await this.props.restaurant.getRestaurant('Bangsue');
  }

  render() {
    const info = this.props.restaurant.toJS().info;
    let listInfo = '';
    if (info && info.length) {
      listInfo = info.map((item, key) => {
        let status = item.opening_hours && item.opening_hours.open_now ? 'open' : 'closed';
        let statusColor = status === 'open' ? 'success' : 'danger';
        return (<ListGroupItem key={key} style={{ border: 0 }}>
          <StarRatings
            starRatedColor="orange"
            rating={item.rating}
            starDimension="15px"
            starSpacing="1px"
          />
          <br />
          <p style={{ display: 'inline', paddingRight: 8 }}>{item.name}</p>
          <Badge color={statusColor}>{status}</Badge>
        </ListGroupItem>);
      });
    }
    return (
      <div>
        <ListGroup>
          {listInfo}
        </ListGroup>
      </div>
    );
  }
}

export default inject('restaurant')(observer(Restaurant));