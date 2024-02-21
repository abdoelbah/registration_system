// import React from 'react'
import StudentSideBar from '../components/student-dashboard/StudentSideBar'
import StudentNav from '../components/student-dashboard/StudentNav'
import Information from '../components/student-dashboard/Information'



const studentDashBoard = (props) => {
  return (
    <>
   
<div className="flex flex-col h-screen">
    <StudentNav/>

<div className="flex-1 flex flex-wrap">
    
    <StudentSideBar/>
    <div className="flex-1 p-4 w-full md:w-1/2">
    <Information/>
        
        {props.view}
    </div>
</div> 
</div>
      
    </>
  )
}

export default studentDashBoard

