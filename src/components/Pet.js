import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this)
  }

  isAdopted = () => {
    console.log("in is adopted func")
    let match = false
    for (let i = 0; i < this.props.adoptedPets.length; i++) {
      if (this.props.adoptedPets[i].id === this.props.singlePet.id)
        match = true
    }
    console.log(match)
    return match
  }


  // console.log(this.props.adoptedPets.includes(this.props.singlePet.id)

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.singlePet.name}, Gender:  {this.props.singlePet.gender === "male" ? '♂' : '♀'} </a>
          <div className="meta">
            <span className="date">Pet type: {this.props.singlePet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.singlePet.age}</p>
            <p>Weight: {this.props.singlePet.weight}</p>
          </div>
        </div>
        <div className="extra content" >
          {this.isAdopted() ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.props.adoptAPet} id={this.props.singlePet.id} >Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
