import React, { Component } from 'react';

// import ./App.css;

import company from './company.json';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        type: "lstm",
        block_num: 3,
        dropout: 0.5,
        unit: 20,
        dense_unit: 10,
        input_shape: [
          10,
          1
        ],
        opt: "adam",
        loss: "mean_absolute_error",
        lstm_activation: "elu",
        dense_activation: "relu",
      },
      symbols: [company[0].value]
    };
  }
  
  render() {
    return (
      <div className='Create'>
        <p> Create</p>
      </div>
    );
  }
}

export default Create;
