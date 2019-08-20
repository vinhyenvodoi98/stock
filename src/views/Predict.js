import React, { Component } from 'react';
import axios from 'axios';
import LineChart from 'react-linechart';
import dataPredict from './dataPredict.json';
import company from './company.json';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

class Predict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {}
    };

    // this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this)
  }

  getData = () => {
    var host = window.location.hostname;
    if (host !== 'localhost') {
      host = 'edge'
    }
    var url = 'http://' + host + ':4999/api/predict';

    axios
      .get(url)
      .then(function (response) {
        console.log(Object.keys(response['data']['result']));
        console.log(url);

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    //data gồm id, name , color, points
    const data = [
      {
        color: 'steelblue',
        points: dataPredict
      }
    ];

    return (
      <div>
        <div className='Predict'>
          <br></br>
          <DropdownButton id='dropdown-basic-button' title='Stock code'>
            {company.map((company, index) => (
              <Dropdown.Item key={index} href={'/' + company.name}>
                {company.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Button onClick={this.getData}>
            Get Data
          </Button>
          <br></br>
          <h1>My Demo LineChart</h1>
          <LineChart
            width={900}
            height={500}
            data={data}
            xLabel='Date'
            yLabel='Price'
            xMin='2016-05-01'
            xMax='2016-12-01'
            yMin='0'
            yMax='100'
            interpolate='Linear'
            isDate={true}
          />
          <br></br>
        </div>
      </div>
    );
  }
}

export default Predict;
