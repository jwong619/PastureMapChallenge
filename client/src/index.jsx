import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addAnimal = this.addAnimal.bind(this);
    this.state = {
      animals: [],
      term: ''
    }
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

   addAnimal(e) {
    if (this.state.term !== '') {
      // var newAnimal = [this.state.term];
      console.log('adding ', this.state.term);

      axios.post('/animal')
      .then(result => {
        console.log('added animal to herd --- ', result.data);
      })
      .catch(error => {
        console.log('failed adding animal', error);
      })

    }

  }

  //

  render() {
    return (<div>
        <h1> My Animals </h1>
        <form>
          <input value={this.state.term} placeholder="enter animal" onChange={this.onChange}/>
          <button onClick={this.addAnimal}>add</button>
        </form>

      </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
