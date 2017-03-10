import React, { Component } from 'react';

import { Grid, Row, Col, Nav, Button ,span  } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Configura extends Component {
  render() {
    return (
<div>
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
                        <Link to="/configura">Configuración</Link>
                      </li>
                      <li>
                          <Link to="/menu">Menu</Link>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>

      <header id="header-container">
        <div className="container">

          <div className="header clearfix">
            <h3 className="text-muted">Menu de Operaciones</h3>
          </div>

            <div className="row marketing">
              <div className="col-lg-6">
                <h4>Configuración 1</h4>
                  <p> <Link to="/menu">Configuración</Link> 1 &raquo;</p>
                <h4>Configuración 2</h4>
                  <p> <Link to="/menu">Configuración</Link> 2 &raquo;</p>
                <h4>Configuración 3</h4>
                  <p> <Link to="/menu">Configuración</Link> 3 &raquo;</p>
              </div>
                <h4>Configuración 4</h4>
                <p> <Link to="/menu">Configuración</Link> 4 &raquo;</p>
                <h4>Configuración 5</h4>
                <p> <Link to="/menu">Configuración</Link> 5 &raquo;</p>
                <h4>Configuración 6</h4>
                <p> <Link to="/menu">Configuración</Link> 6 &raquo;</p>
            </div>
          </div>
          </header>
      </div>
    );
  }
}
