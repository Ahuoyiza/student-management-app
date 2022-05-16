import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewStudent from './components/NewStudent';
import UpdateStudent from './components/UpdateStudent';
import AllStudents from './components/AllStudents';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header >
          <div>
            <div>
              <div className='brand'>
                <Link to={"/create-student"} 
                  className="nav-link">
                  Student Management App
                </Link>
              </div>
  
              <div >
                <div>
                  <Link to={"/create-student"} 
                    className="nav-link">
                    Create Student
                  </Link>
                </div>
  
                <div>
                  <div to={"/student-list"} 
                    className="nav-link">
                    Student List
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <div>
          <div>
            <div >
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" 
                    component={NewStudent} />
                  <Route path="/create-student" 
                    component={NewStudent} />
                  <Route path="/edit-student/:id" 
                    component={UpdateStudent} />
                  <Route path="/student-list" 
                    component={AllStudents} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App