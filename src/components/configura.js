import React, { Component } from 'react';

import { Grid, Row, Col, Nav, Button ,span  } from 'react-bootstrap';
import { Link } from 'react-router';

import Nava from './nava'

export default class Configura extends Component {
  render() {
    return (
<div>
      <Nava />

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
