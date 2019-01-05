import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listRecipe, showRecipe } from '../actions/recipe';

class Sidebar extends Component {
  
  componentDidMount() {
    listRecipe(this.props.dispatch);
  }

  showRecipe = (id) => {
    const receita = this.props.receitas.filter(item => item.id === id)[0];
    this.props.dispatch(showRecipe(receita));
  }

  render() {
    console.log(this.props)
    return (
      <aside>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
        <hr />
        {this.props.receitas.map(item => {
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

export default connect(state => ({ ...state.notification, ...state.listrecipe }))(Sidebar);
