import { useState } from 'react'

const Votes = (props) => {
  return(
    <div>has {props.count} votes</div>
  )
}

const Header = (props) => {
  return (
    <h1> {props.text} </h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(anecdotes.length).fill(0))
  
  console.log("Number", selected)
  
  const Selected = () => {
    let number = Math.floor(Math.random() * anecdotes.length)
    let previousNumber = selected

    while (previousNumber === number) {
      number = Math.floor(Math.random() * anecdotes.length)
  }
    setSelected(number)
  }

  const Vote = () => {
    const updatedVotes = [...allVotes]
    updatedVotes[selected] += 1
    setAllVotes(updatedVotes)
  }

    const maxNumber = Math.max(...allVotes)
    const maxIndex = allVotes.indexOf(maxNumber)

    console.log(maxNumber)
  return (
    <div>
      <Header text = "Anecdote of the day"/>
      {anecdotes[selected]}
      <Votes count = {allVotes[selected]} />
      <button onClick = {Vote}>vote </button>
      <button onClick = {Selected}>next anecdote</button>
      <Header text = "Anecdote with most votes"/>
      {anecdotes[maxIndex]}
      
    </div>
  )
}

export default App