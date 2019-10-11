import React , {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class CounterDisplay extends Component {
  render() {
    return (
      <h1 className="bigTitle">Compteur : {this.props.count }</h1>
    )
  }
}

function mapStateToProps(state) {
    return { count: state.count }
  }
  
  export default connect(
      mapStateToProps, 
      null
  )(CounterDisplay);