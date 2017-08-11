import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  adoptAPet = (event) => {
    let petID = event.target.id
    // debugger
    this.yayPetWasAdopted(petID)
    // console.log("hi")
  }

  findByID = (id) => {
    return this.state.pets.find(pet => {
      return pet.id === id
    })
  }

  yayPetWasAdopted = (id) => {
    let currentAdoptedPets = this.state.adoptedPets
    let pet = this.findByID(id)
    currentAdoptedPets.push(pet)
    let newPets = this.state.pets.filter(pet => {
      return pet.id !== id
    })
    this.setState({
      pets: newPets,
      adoptedPets: currentAdoptedPets
    })
  }



  componentWillMount(){
    this.setURL()
  }

  changeStateFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  onFilterChange = (filter) => {
    this.changeStateFilter(filter)
  }

  setURL = () => {
    const URL = "/api/pets"
    let apiFilter = `?type=${this.state.filters.type}`
      if (this.state.filters.type !== 'all') {
        let fetchURL = URL + apiFilter
        this.makeFetch(fetchURL)
    } else {
      this.makeFetch(URL)
    }
  }

  updatePetsData = (data) => {
    // console.log(data)
    this.setState({
      pets: data
    })
  }

  makeFetch = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(resp => this.updatePetsData(resp))
  }

  render() {
    {/*console.log(this.state.filters.type)*/}
    // console.log(this.state.pets)
    console.log("all pets", this.state.pets, "adoptedPets", this.state.adoptedPets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters appFilter={this.onFilterChange} makeFetchRq={this.setURL}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets}
              adoptPet={this.adoptAPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
