
import './App.css';
import BranchMPage from './pages/BranchMPage';
import FacultyMpage from './pages/FacultyMpage';

import KnowYourFaculty from './pages/KnowYourFaculty';
import Loginpage from './pages/Loginpage';
import SemMPage from './pages/SemMPage';
import Signuppage from './pages/Signuppage';

import { Routes, Route } from 'react-router-dom';
import AllocationPage from './pages/AllocationPage';
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
       </Routes>
    </div>
  );
}

export default App;
