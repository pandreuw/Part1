import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ text, value, closingtext }) => <div>{text}{value}{closingtext}</div>


/**
 * From https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]



  // BIGGGG ISSSUEEE IS USED THIS FORMAT AND I WAS BREAKING MY HEAADDDD!!!! const initialValue = [{ 0: 4, 1: 5, 2: 6, 3: 0, 4: 0, 5: 0 }];
  // I started the exersices to use as an array, then I decided to change it to object, I left the square brackets on, so for sure the system thougth I was using an array of objects.
  const initialValue = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  const [selected, setSelected] = useState(0)
  const [vote, setVote] =useState(initialValue)
  

  
  const ShowVotes = ({index, matriz}) => {
    console.log("ShowVotes executed")
    let copy={...matriz}
    return(
    <>
      <Display text="has " value={copy[index]} closingtext=" votes"/>
    </>
    )
  }

  const nextOne = () => { 
    console.log("nextOne executed")
    setSelected(getRandomInt(0, anecdotes.length - 1))
  }

  const giveAVote = () => { 
    console.log("giveAVote executed")
    let copy={...vote}
    copy[selected]+=1
    setVote(copy)
  }


  //this does not help to show the value of a state
  // console.log("initialValue"+{initialValue})
  // console.log("selected "+{selected})
  // console.log("vote "+{vote})

  // from https://stackoverflow.com/questions/7389069/how-can-i-make-console-log-show-the-current-state-of-an-object
  // this help to show the value of a state
  console.log("selected "+JSON.parse(JSON.stringify(selected)));
  console.log("vote")
  console.log(JSON.parse(JSON.stringify(vote)));

  return (
    <div>
      <p id="Line 65"></p>
      {anecdotes[selected]}
      <br></br>
      {/* <Count {...course.parts.map(ex => ex.exercises)}/> */}
      {/* <ShowVotes index={selected} matriz={JSON.parse(JSON.stringify(vote))}/> */}
      <ShowVotes index={selected} matriz={vote}/>
      <Button handleClick={giveAVote} text="vote" />
      <Button handleClick={nextOne} text='next anecdote' />
    </div>
  )
}

export default App