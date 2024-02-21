// import { useState } from 'react'
import './App.css'
import HomePage from './views/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashBoard from './views/AdminDashBoard'
import Students from './components/admin-dashboard/Students'
import Requests from './components/admin-dashboard/Requests'
import Complaints from './components/admin-dashboard/Complaints'
import Renewal from './components/admin-dashboard/RenewalRequests'
import RenewalSem from './components/student-dashboard/Renewal'
import LogIn from './views/LogIn';
import StudentDashBoard from './views/StudentDashboard'
import Student from './components/student-dashboard/Student'
import StopConstraint from './components/student-dashboard/StopConstraint'
import Affairs from './components/student-dashboard/Affairs'
import SignUp from './views/SignUp'
import Register from './views/SignUp'
import RegData from './components/admin-dashboard/RegData'
function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/adminDashBoard' element={<AdminDashBoard view={<Students />} />} />
          <Route path='/students' element={<AdminDashBoard view={<Students />} />} />
          <Route path='/registration-requqsts' element={<AdminDashBoard view={<Requests />} />} />
          <Route path='/Complaints' element={<AdminDashBoard view={<Complaints />} />} />
          <Route path='/Renewal-requests' element={<AdminDashBoard view={<Renewal />} />} />
          <Route path='/studentDashBoard' element={<StudentDashBoard view={<Student />} />} />
          <Route path='/student' element={<StudentDashBoard view={<Student />} />} />
          <Route path='/Renewal' element={<StudentDashBoard view={<RenewalSem />} />} />
          <Route path='/Stop-Constraint' element={<StudentDashBoard view={<StopConstraint />} />} />
          <Route path='/student-Affairs' element={<StudentDashBoard view={<Affairs />} />} />
          <Route path='/register' element={<Register />} />
          <Route path='admin-studentdata' element={<RegData />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
