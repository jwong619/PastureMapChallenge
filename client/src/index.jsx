import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    this.addAnimal = this.addAnimal.bind(this);
    this.state = {
      animals: [],
      term: '',
      weight: ''
    }
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onWeightChange(e) {
    this.setState({
      weight: e.target.value
    })
  }

  addAnimal() {
    let animalID = this.state.term;

    axios.post('/animal', {animalID: animalID})
    .then(result => {
      console.log('added animal to herd --- ', result.data);
    })
    .catch(error => {
      console.log('failed adding animal', error);
    })
  }

  // select animal to add weight to
  addAnimalWeight() {
    let animalWeight = this.state.weight;
    // new date

    axios.post('/animal/:id/weight', {animalID: animalID})
    .then(result => {
      console.log('added animal weight --- ', result.data);
    })
    .catch(error => {
      console.log('failed adding animal weight', error);
    })
  }

  //

  render() {
    return (<div>
        <h1> My Animals </h1>
        <form>
          <input value={this.state.term} placeholder="enter animal ID" onChange={this.onChange}/>
          <button onClick={this.addAnimal}>add</button>
        </form>
        <form>
          <input value={this.state.weight} type="number" step="0.1"placeholder="enter animal weight" onChange={this.onWeightChange}/>
          <button onClick={this.addWeight}>add weight</button>
        </form>

      </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
