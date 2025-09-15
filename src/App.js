import './App.css';
import Apptrack from './components/Apptrack';
import Homepage from './components/Homepage';
import ScholarshipList from './components/ScholarShip';
import Dashboard from './components/Dashboard';

import SignUp from'./components/SignUp';
import SocialLogin from './components/SocialLogin'

import { Route, Routes } from 'react-router-dom';
import ActiveApplications from "./components/ActiveApplications"
import Studentdash from './components/Studentdash';
import AwardedScholarships from './components/AwardedScholarships';
import HowToApply from './components/HowToApply';
import StudentForm from './components/StudentForm';
import ScholarshipForm from './components/ScholarshipForm';




function App() {
  
  

  return (
    
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<SocialLogin/>}/>
      <Route path='/view' element={<ScholarshipList/>}/>
      <Route path='/views' element={<ScholarshipList/>}/>
      <Route path='/scholarshipsavailable' element={<ScholarshipList/>}/>
      <Route path='/apply' element={<ScholarshipForm/>}/>
      <Route path='/track' element={<Apptrack/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/student' element={<Studentdash/>}/>
      <Route path='/activeapp' element={<ActiveApplications/>}/>
      <Route path='/awarded' element={<AwardedScholarships/>}/>
      <Route path="/how-to-apply" element={<HowToApply/>} />
      <Route path='/studentinfo' element={<StudentForm/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
