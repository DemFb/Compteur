import React , {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class CounterButton extends Component {
  render() {
    return (
      <button className="btn" onClick={ this.props.onIncreaseClick }>Increase</button>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
        dispatch( {type: 'increase'} ) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(CounterButton);