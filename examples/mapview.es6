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
} from '../__tmp__/';
import {
  Map,
  Behaviors,
} from '../__tmp__/src';
import {
  APIKEY,
} from './config';

class MapViewDemo extends Component {
  constructor(props) {
    super(props);
    this.syncMockMapProvider = new SyncMockMapProvider();
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
              mapProvider={this.syncMockMapProvider}
              style={{
                width: 600, height: 500,
              }}
              behaviors={[
                new Behaviors.ClickToCenter(),
                new Behaviors.DragToMoveAround(),
              ]}
            />
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
