import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <div>
      <tr><td>{props.name} {props.value}</td></tr>
    </div>
  )
}

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good - clicks.bad)/total
  const goodPercentage = (clicks.good / total * 100) + "%"
  if (total === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
      <StatisticLine name = "good" value = {clicks.good}/>
      <StatisticLine name = "neutral" value = {clicks.neutral}/>
      <StatisticLine name = "bad" value = {clicks.bad}/>
      <StatisticLine name = "total" value = {total}/>
      <StatisticLine name = "average" value = {average}/>
      <StatisticLine name = "positive" value = {goodPercentage}/>
        </tbody>
      </table>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0})

  const GoodClick = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }

  const NeutralClick = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const BadClick = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }
  return (
    
    <div>
      <h1>give feedback</h1>
      <button onClick = {GoodClick}>good</button>
      <button onClick = {NeutralClick}>neutral</button>
      <button onClick = {BadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics clicks = {clicks}></Statistics>
    </div>
  )
}

export default App
