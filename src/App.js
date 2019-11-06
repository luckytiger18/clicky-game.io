import './App.css';

import rdata from "./data.json";

// import dog1 from './images/dog1.webp';
// import dog2 from './images/dog2.jpeg';
// import dog3 from './images/dog3.jpeg';
// import dog4 from './images/dog4.jpg';
// import dog5 from './images/dog5.jpg';
// import dog6 from './images/dog6.jpg';
// import dog7 from './images/dog7.jpeg';
// import dog8 from './images/dog8.jpg';
// import dog9 from './images/dog9.jpg';
// import dog10 from './images/dog10.jpg';
// import dog11 from './images/dog11.jpg';
// import dog12 from './images/dog12.jpg';


import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    //you must call the Component constructor function using super(), before setting any properties in this class - this is a react standard
    super();

    //this is a react standard, you must call this.state
    this.state = {
      data: rdata,
      score : 0,
      topscore: 0,
    }

  }

  checkImage = (event) => {
    
    // debugger;

    //event.target will get you what you just clicked on, which is the image

    var imageId = event.target.getAttribute('data-id');

    debugger;

    if (this.state.data[imageId-1].clicked == false){

      //need to make clicked to true


      let data = this.state.data.map(item => {
        if (item.id == imageId) item.clicked = true;
        return item;
      })

      //shuffle the data array
      data.sort(() => Math.random() - 0.5);
      
      let score = this.state.score + 1;
      

      this.setState({
        data,
        score
      }) 

    }else{
      this.setState({
        topscore: this.state.score,
        score: 0
      }) 
    }    
  }

  render() {
    return (
      <div className="App">

        <h2>Score: {this.state.score} | Top Score: {this.state.topscore}</h2>

        <div className="imageContainer">
          {this.state.data.map(item => (
              <img
                key={item.id}
                data-id={item.id}
                onClick={this.checkImage}
                src={item.image}
              />
            ))}
        </div>

        {/*<img src={a} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={b} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={c} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={d} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={e} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={f} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={g} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={h} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={i} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={j} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={k} className="App-logo" alt="logo" onClick={this.checkImage} />
        <img src={l} className="App-logo" alt="logo" onClick={this.checkImage} />*/}

        {/*<Person/>*/}

        {/*<Friend friend_name="human" />
        <Friend friend_name="Irina" />
        <Friend friend_name="Melinda" />
        <Friend friend_name="Arashi" />
        <Friend friend_name="Jacob" />*/}

        {/*
        <input type="text" onChange={this.updateName} placeholder="update name"/>

        <input type="text" onChange={this.updateAnotherName} placeholder="update another name"/>

        <button onClick={this.increaseNum}>click me</button>

        <br /><br />
        {this.state.num}
        <br /><br />

        {this.state.anotherName}
        {this.state.anotherName}
        {this.state.anotherName}
        --------

        {this.state.anotherName.split('').reverse().join('')}

        --------

        {this.state.name}
        {this.state.num}
        
        --------

        {this.state.name.split('').reverse().join('')}*/}
      </div>
    );
  }
}

export default App;
