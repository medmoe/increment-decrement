import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';

class IncDec extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: props.num
    }
    this.inc = this.clickHandler.bind(this);
  }
  clickHandler(x){
    let value = this.state.num + x;
    if(value < 0){
      alert("Cannot be less than zero");
    }else{
      this.setState({
        num: value
      })
    }
  }
  render(){
    return <div className="container">
      <div className="output">
        {this.state.num}
      </div>
      <div className="buttons">
        <button onClick={() => this.clickHandler(1)}>increment</button>
        <button onClick={() => this.clickHandler(-1)}>decrement</button>
      </div>
      
    </div>
  }
}
function App() {
  return (
    <IncDec num = {5} />
  );
}
IncDec.propTypes = {
  num: PropTypes.number
}

export default App;
