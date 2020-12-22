import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {  
  const RenderPets = () => {
    return props.pets.map(element => <Pet pet={element}/>);
  }
    return <div className="ui cards">{RenderPets()}</div>
}

export default PetBrowser
