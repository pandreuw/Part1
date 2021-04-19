  import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <PartHeader ct={course} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Count ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
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
  console.log("Hola probando")
  console.log(props.p1.name)
  console.log(props.p1.exercises)
  console.log(props.p2.name)
  console.log(props.p2.exercises)
  console.log(props.p3.name)
  console.log(props.p3.exercises)
  return(
    <>
      <p>
        {props.p1.name} {props.p1.exercises} 

      </p>
      <p>
        {props.p2.name} {props.p2.exercises}
      </p>
      <p>
        {props.p3.name} {props.p3.exercises}
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
