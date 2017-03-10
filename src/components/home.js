import React, { Component } from 'react';

import { Grid, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
<Grid>
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">

              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">
                    <span className="glyphicon glyphicon-fire"></span>
                    LOGO
                  </a>
              </div>

              <div className="collapse navbar-collapse" id="navbar">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="active">
                          <Link to="/">Login</Link>
                      </li>
                      <li>
                          <Link to="/home">Configuración</Link>
                      </li>
                      <li>
                          <a href="#">Pricing</a>
                      </li>
                      
                  </ul>
              </div>
          </div>
      </nav>
      </Grid>
    );
  }
}
