import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(props){
    super(props);
    this.state = {
      plants:[]
    };
  }

  componentDidMount(){
    axios
      .get('http://localhost:3333/plants')
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
      .then(res => {
        console.log(res.data.plantsData);
        this.setState({plants: res.data.plantsData})})
      .catch(err => console.log('the axios call needs work', err));
  //   - set the returned plants array to this.state.plants

  
  }




//START object data inside the array//
  // name: "", 
  // id: 0, 
  // scientificName: "", 
  // difficulty: "", 
  // light: "", 
  // img: "", 
  // sizes:"",
  // watering: 0,
  // description: "", 
  // price: 0
//END object data inside the arrya//











  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p><span role='img' aria-label='light'>☀️</span> {plant.light}</p>
                <p><span role='img' aria-label='water drop'>💦</span> {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}