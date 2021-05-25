import React, { useState } from 'react'

const Display = ({ text, value, closingtext }) => <div>{text}{value}{closingtext}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


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
      <Display text="Total of reviews " value={good+bad+neutral} />
      <Display text="Average " value={(good-bad)/(good+bad+neutral)} />
      <Display text="Percentage of Positive " value={(good)*100/(good+bad+neutral)} closingtext="%" />
    </div>
  )
}

export default App