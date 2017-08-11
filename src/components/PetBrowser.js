import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(){
    super()
  }


  renderAllPets = () => {
    return this.props.pets.map((pet) => {
      return <Pet singlePet={pet} adoptAPet={this.props.adoptPet} adoptedPets={this.props.adoptedPets} />
    })
  }
  

  render() {
    return (
      <div className="ui cards">
        {this.renderAllPets()}
      </div>
    );
  }
}

export default PetBrowser;
