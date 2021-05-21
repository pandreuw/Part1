  import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        name: 'State of a component', 
        exercises: 14
      }
    ]
  }

  return (
    // by modifying the object course, I had to add the constant name and by using '.' I could access the parameter required. 
    <div>
      {/* Tried to use ellipsis but did not worked on the next instruction, seems that = must be added. */}
      <PartHeader ct={course.name} />
      {/* To pass an array as an argument I had to add '...' on ES6, before (ES5) we had to use the function .apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply*/}
      {/* From <Content {p1={parts[0]} p2={parts[1]} p3={parts[2]}/>  to: */}
      <Content {...course.parts}/>
      {/* From an array of objects, pass just a property https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array*/}
      {/* From <Content {p1={parts[0]} p2={parts[1]} p3={parts[2]}/>  to: */}
      <Count {...course.parts.map(ex => ex.exercises)}/>
    </div>
  )
}

const PartHeader = (foo) => {
  return(
    <>
      <h1>
        {foo.ct}
      </h1>
    </>
  )
}

const Content = (props) =>{
  console.log("Hola probando")
  
  return(
    <>
      <p>
        {props[0].name} {props[0].exercises} 
      </p>
      <p>
        {props[1].name} {props[1].exercises} 
      </p>
      {/* I had a lot of issues trying to figure it out, I was using base 1 from RAPID programming, mistake from my side. */}
      <p>
        {props[2].name} {props[2].exercises} 
      </p>
    </>
  )
}

const Count = (props) =>{
  return(
    <>
    <p>Number of exercises {props[0] + props[1] + props[2]}</p>
    </>
  )
}


export default App
