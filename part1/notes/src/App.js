// We are putting the constant Hello into a function

/* 
1. Console should always be open
2. React component names must be capitalized
3. empty <></> tag is shorthand for <Fragment></Fragment> in most cases
*/

// If we want to keep the state of our variable
import { useState } from 'react';

// We are inserting props into a component 
const Hello = (props) => {
  return(
    <>
      <p>Hello {props.name}! You are {props.age}</p>
    </>
  )
}

// We can destructure it such that we can just feed in variables name and age 
const HelloTwo = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age 
  return (
    <>
      <p>Hello {name}! You are {age}</p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  )

}

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>
      {text}
    </button>
)

const App = () => {
  // initiate some constants.
  const now = new Date()
  const a = 10
  const b = 59

  const test = [1, -1, 3]
  test.push(5) // push = append

  const [first, second, ...rest] = test
  
  const test2 = test.concat(5) // creates a new array

  const m1 = test.map(value => value *2) // we can map each value to something else
  const m2 = test.map(value => '<li>' + value + '</li')

  // state variable, setter function 
  const [ counter, setCounter ] = useState(0)
  // we can implement more complex states
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  //event handlers are functions, so if we did not include () => it will break the app
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    // we add this because updating of the state is asynchronous 
    const updatedLeft = left + 1 
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1 
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }


  const History = (props) => {
    if (props.allClicks.length === 0 ) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  }
  // Do not define components inside another component
  // const Display = props => <div>{props.value}</div>

  // Print
  console.log(test.length)
  console.log(test[-1])
  console.log(test2)
  console.log(m1)
  console.log(m2)
  console.log(first, second, rest)

  //loop?
  test.forEach(value => {
    console.log(value)
  })

  // let is changeable, not const
  // try https://medium.com/podiihq/javascript-variables-should-you-use-let-var-or-const-394f7645c88f 

  let age = 21 
  age += 1 

  return (
    //we can use components inside other components
    <div>
      <p>Hello world, it is now {now.toString()}</p>
      <p> {a} + {b} = {a+b}? </p>
      
      <Hello name = "Kendrick" age = {a+b}/>
      <HelloTwo name = "Manoj" age = {age}/>
      <p>How many times have I pressed this button below? {counter}</p>

      <Button 
        handleClick={increaseByOne}
        text = "Press this!"
      />

      <p></p>

      <Button 
        handleClick={decreaseByOne}
        text = "Do you really want to decrease me? oWo"
      />

      <p></p>

      <Button handleClick ={setToZero} 
      text = "Do you really want to reset me? uWu "/>
      <p></p>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')} total count: {total}</p>
      <History allClicks = {allClicks}/>
    </div>

    
  )
}

export default App
