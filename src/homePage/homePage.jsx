import React from "react"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className='home'>
      <h1>Welcome to the Video Meeting App</h1>
      <p>Choose the meeting option to continue</p>
      <Link to="/meeting">Go to Meeting</Link>

    </div>
  )
}
export default HomePage