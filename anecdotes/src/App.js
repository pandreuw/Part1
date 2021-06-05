import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ text, value, closingtext }) => <div>{text}{value}{closingtext}</div>

const ElementWithBiggestNumber = ({ thevotes }) => {

  //did not worked "cannot convert undefined or null to object"
  const arraylength = parseInt(Object.keys(thevotes).length)



  // const temp1 = Math.max(parseInt(Object.keys(copy)))
  // console.log("MostVoted executed " + temp1)


  // console.log("Biggest number is: " + Object.keys(copy))


  // let thebigone = thevotes.length;
  // console.log("the big one is: " + thebigone);
  // return <div>thebigone</div>;
}

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
  const [vote, setVote] = useState(initialValue)
  const [previous, setprevious]=useState(0)



  const ShowVotes = ({ index, matriz }) => {
    console.log("ShowVotes executed")
    let copy = { ...matriz }
    return (
      <>
        <Display text="has " value={copy[index]} closingtext=" votes" />
      </>
    )
  }

  const nextOne = () => {
    console.log("nextOne executed")
    setSelected(getRandomInt(0, anecdotes.length - 1))
  }

  const giveAVote = () => {
    console.log("giveAVote executed")
    let copy = { ...vote }
    copy[selected] += 1
    setVote(copy)
  }

  const MostVoted = ({ matriz }) => {

    // This does not work, it returns NaN
    // console.log("Biggest number is: "+Math.max(copy))
    //This does not work either, it gives undefined
    // console.log("length of the array is: "+copy.length)
    // console.log("value of element 0 is: " + copy[0])
    // console.log("value of element 1 is: " + copy[1])
    // console.log("value of element 2 is: " + copy[2])
    // console.log("value of element 3 is: " + copy[3])
    // console.log("value of element 4 is: " + copy[4])
    // console.log("value of element 5 is: " + copy[5])
    // console.log("length of array is: " + copy.length)

    //Removed going to work here
    //ElementWithBiggestNumber(copy)


    // //This worked partially
    //     //This works ok
    //     const temp = parseInt(Object.keys(copy).length) + 1
    //     console.log("Array size is " + temp)

    //     //This does not work, the function does not return the max value, it returns the full array
    //     const temp1 = Math.max(parseInt(Object.keys(copy)))
    //     console.log("biggest number " + temp1)
    //     console.log(" " + Object.keys(copy))


    let copy = { ...matriz }
    let biggestelement = 0
    let biggestnumber=0
    const arraylength = parseInt(Object.keys(copy).length)
    //debugger
    for (let i = 0; i < arraylength; i++) {
      console.log("Element " + i + " has a value of " + copy[i])
      if (copy[i]>biggestnumber) {
        biggestelement=i
        biggestnumber=copy[i]
      } 
    }
    //debugger
    console.log("The biggest element is "+biggestelement + " whith a value of "+copy[biggestelement])
    return (
      <>
        {anecdotes[biggestelement]}
      </>
    )
  }

  //this does not help to show the value of a state
  // console.log("initialValue"+{initialValue})
  // console.log("selected "+{selected})
  // console.log("vote "+{vote})

  // from https://stackoverflow.com/questions/7389069/how-can-i-make-console-log-show-the-current-state-of-an-object
  // this help to show the value of a state
  console.log("selected " + JSON.parse(JSON.stringify(selected)));
  console.log("vote")
  console.log(JSON.parse(JSON.stringify(vote)));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      {/* <Count {...course.parts.map(ex => ex.exercises)}/> */}
      {/* <ShowVotes index={selected} matriz={JSON.parse(JSON.stringify(vote))}/> */}
      <ShowVotes index={selected} matriz={vote} />
      <Button handleClick={giveAVote} text="vote" />
      <Button handleClick={nextOne} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <MostVoted matriz={vote} />

    </div>
  )
}

export default App