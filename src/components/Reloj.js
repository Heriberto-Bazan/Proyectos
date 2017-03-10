
import React, { Component } from 'react';

import { Grid, Row, Col, Button, Nav, Label } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Reloj extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
              <span className="sr-only">Toggle navigation</span>
              <span classNames="icon-bar"></span>
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
                <Link to="/configura">Configuración</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reloj">Tiempo</Link>
              </li>
              </ul>
            </div>
        </div>
      </nav>
      <header id="header-container">
        <div className="container">

          <div className="header clearfix">
            <h3 className="text-muted">Soy el Tiempo</h3>
          </div>
          </div>
          </header>
  </div>
    );
  }
}
