import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showRecipe } from '../actions/recipe';

class Sidebar extends Component {
  
  state = {
    receitas: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/receitas')
    .then(response => response.json())
    .then(response => {
      this.setState({ receitas: response });
    });
  }

  showRecipe = (id) => {
    const receita = this.state.receitas.filter(item => item.id === id)[0];
    this.props.dispatch(showRecipe(receita));
  }

  render() {
    return (
      <aside>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
        <hr />
        {this.state.receitas.map(item => {
        return <a href="javascript:"
                  key={item.id}
                  onClick={() => this.showRecipe(item.id)}
                  style={{display: 'block'}}>
                  {item.title}
               </a>
        })}
        <br />
        <b style={{color: this.props.color}}>{this.props.message}</b>
      </aside>
    );
  }
}

export default connect(state => state.notification)(Sidebar);
