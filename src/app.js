import Header from './components/header'

import {useState} from 'react'

import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  // Use initialEmails for state
  const [listOfEmails, setEmails] = useState(initialEmails)
  console.log(initialEmails)
  //const [showReadEmails, setShowReadEmails] = useState(setCompletedtrue)


const emails=listOfEmails.map(renderEmails => {
  return <li className="email">
  <div className="select">
    <input
      className="select-checkbox"
      type="checkbox"/>
  </div>
  <div className="star">
    <input  
      className="star-checkbox"
      type="checkbox"
    />
  </div>
  <div className="sender">{renderEmails.sender}</div>
  <div className="title">{renderEmails.title}</div>
</li>
})
//Create a toggleRead function that updates the target email's read property in state, when a user clicks on the checkbox
const toggleRead = (target) => {
  console.log("bye", updatedEmails)
  const updatedEmails = listOfEmails.map(email => 
    email === target ? {...email, read: !email.read} : email)
    console.log("byee", updatedEmails)
    setEmails(updatedEmails)
}

// const completeWorkout = (target) => {
//   const doneWorkouts = workouts.map(workout =>
//     workout === target ? { ...workout, done: !false } : workout
//   )
//   setWorkouts(doneWorkouts)
// }

// Create a toggleStar function that updates the target email's starred property in state, when a user clicks on the star
const toggleStar = (target) => {
  console.log("hi", updatedEmails)
  const updatedEmails = listOfEmails.map(email => 
    email === target ? {...email, starred: !email.starred} : email)
    console.log("hello", updatedEmails)
    setEmails(updatedEmails)
}

// const incompleteTodos = listOfEmails.filter(email => !email.completed)
//   const completedTodos = listOfEmails.filter(email => email.completed)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
             //onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              //onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emails}</main>
    </div>
  )
}

export default App
