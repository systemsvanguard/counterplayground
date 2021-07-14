// src/App.js
import React from 'react';
import TheCount3 from '../src/images/the_count03.jpg';
import TheCount4 from '../src/images/the_count04.jpg';
import './App.css';

function App() {

  const initialState = 10;
  const [myCounter , setCount] = React.useState(initialState);

  const addOne = () => {
    setCount(myCounter => myCounter + 1);
  }

  const addFive = () => {
    setCount(myCounter => myCounter + 5 );
  }

  const minusOne = () => {
    setCount(myCounter => myCounter - 1 );
  }

  const minusFour = () => {
    setCount(myCounter => myCounter -4 );
  }

  const timesTwo = () => {
    setCount(myCounter => myCounter * 2 );
  }

  const resetCount = () => {
    setCount(initialState);
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="is-size-2 has-text-weight-bold has-text-link-dark  has-text-centered">The Counting Playground</h1>
        <img src={TheCount3} className="img_responsive" alt="The Counting Playground" title="The Counting Playground" />
        <br />
        <h2 className="has-text-centered has-text-weight-bold has-text-danger-dark is-size-2">
          Play with the numbers below my children! <br />Counting is FUN!! - <em>The Count</em>
        </h2>
        <br /><br />
        <h1 
          className="subtitle 
          has-text-centered 
          has-text-weight-bold 
          is-size-2 
          has-text-link-dark"
        >
          Our Counter is now   
          <span className="is-italic is-size-1 "> {myCounter}</span>. 
        </h1>

          <div className="centreBlock">
            <div className="block">
              <p className="buttons">
                <button className="button is-link is-outlined is-medium" onClick={minusFour}>
                  <span className="icon is-large"><i className="fas fa-minus"></i></span>
                  <span> Minus 4 </span>
                </button> 

                <button className="button is-link is-medium" onClick={minusOne}>
                  <span className="icon is-large"><i className="fas fa-minus"></i></span>
                  <span> Minus 1 </span>
                </button>  

                <button className="button is-danger is-medium is-inverted is-large" onClick={resetCount}>
                  <span className="icon is-large"><i className="fas fa-redo"></i></span>
                  <span> Reset </span>
                </button>  
              
                <button className="button is-link is-medium" onClick={addOne}>
                  <span className="icon is-large"><i className="fas fa-plus"></i></span>
                  <span> Add 1 </span>
                </button>   

                <button className="button is-link is-outlined is-medium" onClick={addFive}>
                  <span className="icon is-large"><i className="fas fa-plus"></i></span>
                  <span> Add 5 </span>
                </button>   

                <button className="button is-success is-medium" onClick={timesTwo}>
                  <span className="icon is-large"><i className="fas fa-times"></i></span>
                  <span> Times 2 </span>
                </button>        
              </p>         
            </div>            
          </div>          
        </div>
    
        <br /><br />
        <img src={TheCount4} className="img_responsive" alt="Count It Higher" title="Count It Higher" />
        <br /><br /> 
        <h3 className="is-size-4  has-text-centered">GitHub link : <a href="https://github.com/systemsvanguard/counterplayground">Counting Playground</a></h3>
        <br /><br />     

    </section>
  );
}

export default App;
