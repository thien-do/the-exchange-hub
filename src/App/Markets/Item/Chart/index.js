import React from 'react';
import Constructor from 'chart.js';

class MarketsItemChart extends React.Component {
  constructor(props) {
    super(props);
    this.setNode = this.setNode.bind(this);
    this.node = null;
  }
  componentWillReceiveProps(nextProps) {
    new Constructor(this.node, {
      type: 'line',
      data: {
        datasets: nextProps.exchanges.map((exchange, index) => ({
          data: nextProps.rates[exchange],
          pointRadius: 0,
          fill: false,
          borderColor: nextProps.colors[index],
          borderWidth: 2,
          lineTension: 0,
        })),
        labels: Array.from(Array(26)),
      },
      options: {
        maintainAspectRatio: false,
        events: [],
        tooltips: { enabled: false },
        legend: { display: false },
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false }],
        },
        animation: { duration: 0 },
      },
    });
  }
  setNode(node) {
    this.node = node;
  }
  render() {
    return <canvas ref={this.setNode} />;
  }
};

export default MarketsItemChart;
