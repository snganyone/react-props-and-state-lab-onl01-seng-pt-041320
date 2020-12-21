import React from 'react'

class Filters extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }

  AnimalChange = () => {

  }

  handleClick = () => {
    const bu = document.getElementsByClassName("ui secondary button");
  }
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
        {this.props.onChangeType}
      </div>
    )
  }
}

export default Filters
