import React, { useState } from 'react'

const Display = ({ text, value, closingtext }) => <div>{text}{value}{closingtext}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// a proper place to define a component
const Statistics = ({ _good, _neutral, _bad }) => {
  // ...
  return (<div>
    <Display text="Total of reviews " value={_good + _bad + _neutral} />
    <Display text="Average " value={(_bad) / (_good + _bad + _neutral)} />
    <Display text="Percentage of Positive " value={(_good) * 100 / (_good + _bad + _neutral)} closingtext="%" />
  </div>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [totalreviews, setTotalReviews] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      {/* <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} /> */}
      <h2>Statistics</h2>
      <Display text="Good " value={good} />
      <Display text="Neutral " value={neutral} />
      <Display text="Bad " value={bad} />
      <Statistics _good={good} _neutral={neutral} _bad={bad} />
    </div>
  )
}

export default App