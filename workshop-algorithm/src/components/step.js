import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'get peanut butter,jelly,butter knife,plate and bread',
        'smear peanut butter on 1 slice of bread',
        'then you smear jelly on the other slice',
        'put the two slices together',
        'put your creation on plate and enjoy'
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
