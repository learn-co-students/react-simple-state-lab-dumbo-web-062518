import React, { Component } from 'react';
import { pattern2 } from './data.js'
import Cell from './Cell';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, index) =>
      <Cell key={index} value={val} />
    ) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals, index) =>
      <div
        key={index}
        className="row">
        {this.genRow(rowVals)}
      </div>
    )
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: pattern2
}
