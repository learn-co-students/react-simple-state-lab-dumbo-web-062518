import React,  { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  changeColor = (event) => {
    this.setState({ color: "#333" })
  }

  render() {
    // const styling = {
    //   backgroundColor: this.state.values
    // }

    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
    )
  }
}
