import ReactDOM from 'react-dom';
import React, {
  Component,
} from 'react';
import {
  Row, Col,
  Button,
  Input,
} from 'react-bootstrap';
import _ from 'lodash';

import {
  DaumMapProvider
} from '../src';

import {
  Map,
  Behaviors,
} from 'react-modular-map';
import {
  APIKEY,
} from './config';
import Marker from './marker';
import GeoJson from './geojson';


class MapViewDemo extends Component {
  constructor(props) {
    super(props);
    this.daumMapProvider = new DaumMapProvider({
      APIKey: APIKEY,
    });
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1> Map View Test! </h1>
        <Row>
          <Col md={1} sm={1} />
          <Col md={8} sm={8} >
            <Map
              mapProvider={this.daumMapProvider}
              style={{
                width: 600, height: 500,
              }}
              behaviors={[
                new Behaviors.ClickToCenter(),
                new Behaviors.DragToMoveAround(),
                new Behaviors.ScrollToZoomIn(),
              ]}
              initialCenter={{ lat:33.450701, lng:126.570667 }}
            >
              <Marker
                position={{ lat: 33.450701, lng: 126.570667 }}
              />
              <GeoJson
                positions={[
                  { lat: 33.450701, lng: 126.570667 },
                  { lat: 33.4509, lng: 126.570667 },
                  { lat: 33.4509, lng: 126.5703 },
                  { lat: 33.4509, lng: 126.57 },
                  { lat: 33.450701, lng: 126.5703 },
                ]}
              />
            </Map>
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(
  <MapViewDemo />,
  document.getElementById('app')
);
