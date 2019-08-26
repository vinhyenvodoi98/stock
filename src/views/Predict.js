import React, { Component, useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { InputNumber } from 'rsuite';

import 'rsuite/dist/styles/rsuite.min.css';

import company from './company.json';

function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      props.getData().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading, props]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Processing…' : 'Predict'}
    </Button>
  );
}

class Predict extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: company[0].label,
      symbol: company[0].value,
      length: 5,

      // Chart preferences
      options: {
        annotations: {
          xaxis: [
            {
              x: Date.now(),
              strokeDashArray: 0,
              borderColor: "#775DD0",
              label: {
                borderColor: "#775DD0",
                style: {
                  color: "#fff",
                  background: "#775DD0"
                },
                text: "History"
              },
            },
            {
              x: Date.now(),
              borderColor: "#FEB019",
              label: {
                borderColor: "#FEB019",
                style: {
                  color: "#fff",
                  background: "#FEB019"
                },
                position: "bottom",
                offsetX: 16,
                text: "Prediction"
              }
            }
          ],
        },
        chart: {
          id: 'basic-line',
          zoom: {
            type: 'x',
            enabled: true
          },
        },
        colors: ['#77B6EA'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: '',
          align: 'center',
          style: {
            fontSize: '20px',
            color: '#2471A3'
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            colorStops: [
              {
                offset: 0,
                color: "#77B6EA",
                opacity: 1
              },
              {
                offset: 90,
                color: "#EB656F", // #545454
                opacity: 1
              },
            ]
          },
        },
        xaxis: {
          categories: [],
          type: "datetime",
          labels: {
            format: 'yy MMM \'dd',
          },
          title: {
            text: "Date",
            style: {
                color: "#148F77",
                fontSize: '18px',
            },
          },
        },
        yaxis: {
          decimalsInFloat: 2,
          title: {
            text: "Price",
            style: {
                color: "#148F77",
                fontSize: '18px',
            },
          },
        }
      },
      series: [
        {
          name: '',
          data: [],
        }
      ]
    };
  }

  handleSymbolChange = selectedOption => {
    this.setState({ name: selectedOption.label });
    this.setState({ symbol: selectedOption.value });
  };

  handleLengthChange = value => {
    this.setState({ length: value });
  }

  getData = () => {
    return new Promise((resolve, reject) => {
      var host = window.location.hostname;
      if (host !== 'localhost') {
        host = 'edge';
      }
      var url = 'http://' + host + ':4999/api/predict';

      axios
        .get(url, {
          name: this.state.symbol,
          seq_len: this.state.length
        })
        .then( (response) => {
          const pastValue = response.data.value;
          const predictValue = response.data.result;

          var dates = [...Object.keys(pastValue), ...Object.keys(predictValue)];
          var prices = [...Object.values(pastValue), ...Object.values(predictValue)].map(x => Math.round(x*1000)/1000); // Round a float to a 2 decimal places
          // console.log(dates);
          // console.log(prices);

          var options = {
            xaxis: {
              categories: dates,
            },
            title: {
              text: this.state.name + ' (' + this.state.symbol + ') Stock Price Movement',
            }
          };
          var series = [
            {
              name: 'series-1',
              data: prices,
            }
          ]
          this.setState({options, series});
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    })
  }

  render() {
    const options = company;

    return (
      <div className="Predict">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div style={{ width: 450 }}>
                <Select
                  onChange={this.handleSymbolChange}
                  options={options}
                  placeholder='Company'
                />
              </div>
            </Col>

            <Col md="auto">
              <div style={{ width: 140 }}>
                <InputNumber
                  postfix="day(s)"
                  defaultValue={this.state.length}
                  min={1}
                  onChange={this.handleLengthChange}
                />
              </div>
            </Col>

            <Col md="auto">
              <LoadingButton getData = {this.getData}/>
            </Col>
          </Row>
        </Container>

        <div className="mixed-chart">

          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="1300"
            height="500"
          />
        </div>
      </div>
    );
  }
}

export default Predict;

