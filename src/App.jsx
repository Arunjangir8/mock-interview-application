import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Interviewer from "./Pages/Interviewer.jsx"
import { Login } from "./Pages/Login.jsx"
import About from "./Pages/About.jsx"
import Myprofile from "./Pages/Myprofile"
import Myinterviews from "./Pages/Myinterviews"
import Apointment from "./Pages/Apointment.jsx"
import Navbar from './Components/Navbar.jsx'
import { Footer } from './Components/Footer.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/interviewer' element={<Interviewer />} />
        <Route path='/interviewer/:speciality' element={<Interviewer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />

        {/* Protected Routes */}
        <Route
          path='/my-profile'
          element={
            <ProtectedRoute>
              <Myprofile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-interviews'
          element={
            <ProtectedRoute>
              <Myinterviews />
            </ProtectedRoute>
          }
        />
        <Route
          path='/appointment/:intid'
          element={
            <ProtectedRoute>
              <Apointment />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App