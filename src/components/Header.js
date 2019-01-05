import React, { Component } from 'react';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header>
        {this.props.title}
        <b style={{float: 'right'}}>{this.props.message}</b>
      </header>
    );
  }
}

export default connect(({ notification }) => notification)(Header);
