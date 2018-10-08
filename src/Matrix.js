import React, { Component } from 'react';
import { pattern2 } from './data.js'
import Cell from './Cell';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val =>
      <Cell value={val} />
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

// Matrix.defaultProps = {
//   values: pattern2
// }


Matrix.defaultProps = {
 values: (() => {
  const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  return (new Array(10).fill(defRow))
 })()
}
