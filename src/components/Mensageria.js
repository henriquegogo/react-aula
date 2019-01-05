import React, { Component } from 'react';

export default class Mensageria extends Component {

  render() {
    return (
      <div>
        <h2>Mensageria</h2>
        <p>Usuário: Henrique</p>
        <b>{this.props.message}</b>
      </div>
    );
  }
}
