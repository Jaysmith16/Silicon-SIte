
import './App.css';
import BranchMPage from './pages/BranchMPage';
import FacultyMpage from './pages/FacultyMpage';

import KnowYourFaculty from './pages/KnowYourFaculty';
import Loginpage from './pages/Loginpage';
import SemMPage from './pages/SemMPage';
import Signuppage from './pages/Signuppage';

import { Routes, Route } from 'react-router-dom';
import AllocationPage from './pages/AllocationPage';
import ForgotPasswordPage from './components/forgotPwd/ForgotPasswordPage';
import VerifyEmail from './components/verifyEmail/VerifyEmail';
// import About from './components/AboutUs/aboutus';
import AboutUsPage from './pages/AboutUs';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <div>
    <Routes>
          <Route path="/" element={<KnowYourFaculty />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/branch" element={<BranchMPage />} />
          <Route path="/sem" element={<SemMPage />} />
          <Route path="/faculty" element={<FacultyMpage />} />
          <Route path="/allocation" element={<AllocationPage/>} />
          <Route path="/forgot_pwd" element={<ForgotPasswordPage/>}/>
          <Route path="/verify" element={<VerifyEmail/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/report' element={<ReportPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
