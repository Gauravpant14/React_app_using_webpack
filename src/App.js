import React from 'react'
// import './main.css'
import btnStyles from './Button.module.css'
const App = () => {
  return (
    <div>
        <h1>App component lets change this</h1>
        <button className={btnStyles.success}>Success</button>
        <button className={btnStyles.error}>Error</button>
        </div>
  )
}

export default App