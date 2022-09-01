import React from 'react'
import robotData from './mockData/robot.json'
import Robot from './components/Robot'

function App() {
  return (
    <ul>
      {robotData.map((r) => (
        <Robot id={r.id} name={r.name} email={r.email} />
      ))}
    </ul>
  )
}

export default App
