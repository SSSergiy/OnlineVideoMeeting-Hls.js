import React from "react"
import { Link } from "react-router-dom"
import MeetingPage from './meetingPage/meetingPage'

function App() {
  return (
    <div className='wrapper'>
      <h1>Meeting Page</h1>
      <Link to='/'>Go to home</Link>
      <MeetingPage />
    </div>
  )
}

export default App;


