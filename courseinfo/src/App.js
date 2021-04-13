import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <PartHeader ct={course} />
      <Content p1={part1} ex1={exercises1} p2={part2} ex2={exercises2} p3={part3} ex3={exercises3} />
      <Count ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>

  )
}

const PartHeader = (props) => {
  return(
    <>
      <h1>
        {props.ct}
      </h1>
    </>
  )
}

const Content = (props) =>{
  return(
    <>
      <p>
        {props.p1} {props.ex1}
      </p>
      <p>
        {props.p2} {props.ex2}
      </p>
      <p>
        {props.p3} {props.ex3}
      </p>
    </>
  )
}

const Count = (props) =>{
  return(
    <>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

/*
Change this
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}

for this:
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

*/

export default App
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
