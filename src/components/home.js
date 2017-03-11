import React, { Component } from 'react';

import { Grid, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

import Nava from './nava';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Nava />
      </Grid>
    );
  }
}
