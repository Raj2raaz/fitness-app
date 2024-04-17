import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage'
import  SecondPage from './SecondPage'
import Signup from './Signup'
import Login from './Login'
import Goals from './Goals'
import WorkoutTracker from './WorkoutTracker'
import WorkoutSchedule from './WorkoutSchedule'



function App() {
  return (
      
    <Router>  
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/workoutTracker" element={<WorkoutTracker />} />
          <Route path="/workoutSchedule" element={<WorkoutSchedule />} />  
        </Routes>
      
    </Router>

      
    
  )
}

export default App

