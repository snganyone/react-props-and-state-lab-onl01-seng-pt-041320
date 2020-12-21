import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    if(this.state.filters.type === 'all'){
      fetch(`/api/pets`)
    } else if (this.state.filters.type === 'cat'){
      fetch(`/api/pets?type=cat`)
    } else if (this.state.filters.type === 'dog'){
      fetch(`/api/pets?type=dog`)
    } else if (this.state.filters.type === 'micropig'){
      fetch(`/api/pets?type=micropig`)
    }
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.state.filters.type} onFindPetsClick/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
