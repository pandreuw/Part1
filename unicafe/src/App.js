import React, { useState } from 'react'

const Statistic = ({ text, value, closingtext }) => <div>{text}{value}{closingtext}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


// a proper place to define a component
const Statistics = ({ _good, _neutral, _bad }) => {
  // ...
  console.log("debug7")
  return (
    <div>
      {/* <Statistic text="Good " value={_good} />
      <Statistic text="Neutral " value={_neutral} />
      <Statistic text="Bad " value={_bad} />
      <Statistic text="Total of reviews " value={_good + _bad + _neutral} />
      <Statistic text="Average " value={(_good - + _bad) / (_good + _bad + _neutral)} />
      <Statistic text="Percentage of Positive " value={(_good) * 100 / (_good + _bad + _neutral)} closingtext="%" /> */}

      <table>
        <tbody>
          <tr>
            <td><Statistic text="Good "/></td>
            <td><Statistic value={_good} /></td>
          </tr>
          <tr>
            <td><Statistic text="Neutral " /></td>
            <td><Statistic value={_neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text="Bad " /></td>
            <td><Statistic value={_bad} /></td>
          </tr>
          <tr>
            <td><Statistic text="Total of reviews " value={_good} /></td>
            <td><Statistic value={_good + _bad + _neutral} /></td>
          </tr>
          <tr>
            <td><Statistic text="Average " /></td>
            <td><Statistic value={(_good - + _bad) / (_good + _bad + _neutral)} /></td>
          </tr>
          <tr>
            <td><Statistic text="Percentage of Positive " /></td>
            <td><Statistic value={(_good) * 100 / (_good + _bad + _neutral)} closingtext="%" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const ConditionalDisplay = ({ goodcount, neutralcount, badcount }) => {
  console.log("debug4")
  if (goodcount > 0 || neutralcount > 0 || badcount > 0) {
    console.log("debug5")
    return (
      <div>
        <Statistics _good={goodcount} _neutral={neutralcount} _bad={badcount} />
      </div>
    )
  } else {
    console.log("debug6")
    return (<div><h3>No feedback given</h3></div>)
  }

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log("debug1")
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      <ConditionalDisplay goodcount={good} neutralcount={neutral} badcount={bad} />
    </div>
  )
}

export default App