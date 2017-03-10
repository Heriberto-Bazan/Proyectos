import React, { Component } from 'react';

import { Grid, Row, Col, Button, Nav, Label } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Sucursal extends Component {
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
              <h1 className="text-center">Sucursal por defecto </h1>
            </div>
          </div>
        </header>

    <section id="productos-container">
      <div className="container">
        <div className="row">

            <div className="col-xs-12 col-md-3">
              <div className="list-group filtros-toggle">
                <a id="filtrosToggle" href="#" className="list-group-item list-group-item-action navbar-toggler hidden-sm-up" data-target="#filtros-container" data-toggle="collapse">
                  <h5 className="list-group-item-heading">Sucursales<i className="fa fa-chevron-down"></i></h5>
                </a>
              </div>
                <div id="filtros-container" className="collapse navbar-toggleable-xs">
                  <div className="list-group">
                    <a href="" className="list-group-item list-group-item-action active">
                      <h5 className="list-group-item-heading">Configuración</h5>
                    </a>
                    <Link to="/menu" className="list-group-item list-group-item-action">
                      Mis Datos
                    </Link>
                    <a href="" className="list-group-item list-group-item-action">
                          Sucursales
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      Avisos
                    </a>
                  </div>
                </div>
            </div>

          <div className="col-xs-12 col-md-9">
            <h1 className="text-muted">Sucursales</h1>
              <form className="form-horizontal" role="form">
                <div className="form-group">
                  <label forName="ejemplo_email_3" className="col-lg-2 control-label">Nombre</label>
                  <div className="col-lg-10">
                    <input type="email" className="form-control" id="ejemplo_email_3" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group">
                  <label forName="ejemplo_password_3" className="col-lg-2 control-label">Usuario</label>
                <div className="col-lg-10">
                  <input type="password" className="form-control" id="ejemplo_password_3" placeholder="Contraseña"/>
                </div>
                </div>

                <div className="form-group">
                  <div className="col-lg-offset-2 col-lg-10">
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Actualizar</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
    );
  }
}
