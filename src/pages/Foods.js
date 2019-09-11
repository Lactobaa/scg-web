import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Badge, Card, CardBody, Spinner } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import MapContainer from './components/MapContainer';

export class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      loading: true,
    };
  }

  async componentWillMount() {
    const results = await this.props.restaurant.getRestaurant('Bangsue');
    this.setState({
      info: results,
      loading: false,
    });
  }

  render() {
    const info = this.state.info;
    let content = '';
    if (!this.state.loading) {
      if (info && info.length) {
        let listInfo = info.map((item, key) => {
          let status = item.opening_hours && item.opening_hours.open_now ? 'open' : 'closed';
          let statusColor = status === 'open' ? 'success' : 'danger';
          return (
            <div key={key}>
              <Card>
                <CardBody>
                  <StarRatings
                    starRatedColor="orange"
                    rating={item.rating}
                    starDimension="15px"
                    starSpacing="1px"
                  />
                  <br />
                  <p style={{ display: 'inline', paddingRight: 8 }}>{item.name}</p>
                  <Badge color={statusColor}>{status}</Badge>
                </CardBody>
              </Card>
              <br />
            </div>
          );
        });

        content = (
          <div style={{ paddingBottom: 420 }}>
            {listInfo}
            <MapContainer info={info} />
          </div>
        );
      }else {
        content = (
          <div style={{ paddingBottom: 40, paddingTop: 20, textAlign: 'center' }}>
          <h3 style={{color: 'gray'}}>Cannot get api restaurant.</h3>
        </div>
        );
      }
    } else {
      content = (
        <div style={{ paddingBottom: 40, paddingTop: 20, textAlign: 'center' }}>
          <Spinner type="grow" color="dark" />{' '}
          <Spinner type="grow" color="dark" />{' '}
          <Spinner type="grow" color="dark" />
        </div>
      );
    }

    return (
      <div class="container">
        <header class="text-center mb-2">
          <h2 data-animate="fadeInUp" class="title">Restaurants</h2>
          <p data-animate="fadeInUp" class="lead">The restaurants in <b>Bangsue</b> area. You can see these on Map below.</p>
        </header>
        <div data-animate="fadeInUp">
          {content}
        </div>
      </div >
    );
  }
}

export default inject('restaurant')(observer(Foods));