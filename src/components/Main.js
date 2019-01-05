import React, { Component } from 'react';
import { connect } from 'react-redux';

import { notification, warning } from '../actions/notification';

class Main extends Component {

  notify = () => {
    this.props.dispatch(notification('Hello world!'));
  }

  warn = () => {
    this.props.dispatch(warning('Caution!'));
  }

  render() {

    return (
      <main>
        <h1>{this.props.title}</h1>
        <ul>
        {this.props.ingredientes.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
        </ul>
        <br /><br /><br />
        <button onClick={this.notify}>Notify</button>
        <button onClick={this.warn}>Warn</button>
      </main>
    );
  }
}

export default connect(({ recipe }) => recipe)(Main);
