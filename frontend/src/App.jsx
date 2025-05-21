import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DepartmentRegistration from './components/DprtmntRegistration';
import DepartmentRoom from './components/DprtmntRoom';
import DepartmentProf from './components/DprtmntProf';
import SideBar from './components/Sidebar';
import ProgramTagging from './components/ProgramTagging';
import CourseManagement from './pages/CourseManagement';
import CoursePanel from './components/CoursePanel';
import ProgramPanel from './components/ProgramPanel';
import CurriculumPanel from './components/CurriculumPanel';
import SectionPanel from './components/SectionPanel';
import DepartmentSection from './components/DepartmentSection';
import ProtectedRoute from './components/ProtectedRoute';
import LoginProf from './components/LoginProf';
import RegisterProf from './components/RegisterProf';

import YearLevelPanel from './components/YearLevelPanel';
import YearPanel from './components/YearPanel';
import YearUpdateForm from './components/YearUpdateForm';
import SemesterPanel from './components/SemesterPanel';
import SchoolYearPanel from './components/SchoolYearPanel';
import SchoolYearActivatorPanel from './components/SchoolYearActivatorPanel';

import AdmissionDashboardPanel from './pages/AdmissionDashboard';
import SystemDashboardPanel from './pages/SystemDashboard';
import DepartmentManagement from './pages/DepartmentDashboard';

import StudentNumbering from './components/StudentNumbering';
import CourseTagging from './components/CourseTagging';
import ChangeGradingPeriod from './components/ChangeYearGradPer';
import AccountDashboard from './pages/AccountDashboard';
import ScheduleChecker from './components/ScheduleChecker';
import SearchStudentCOR from './components/SearchCertificateOfGrades';
import RoomRegistration from './components/RoomRegistration';
import ScheduleFilterer from './pages/SchedulePlottingFilter';

import FacultyDashboard from './pages/FacultyDashboard'; //For Professors & Faculty Members
import Dashboard from './pages/Dashboard'; // For SuperAdmin & Admin
import ApplicantDashboard from './pages/ApplicantDashboard';

import Unauthorized from './components/Unauthorized';
import RequirementUploader from './components/RequirementUploader';
import GradingSheet from './components/GradingSheet';
import FacultyWorkload from './components/FacultyWorkload';
import FacultyMasterList from './components/FacultyMasterlist';
import FacultyStudentClassList from './components/FacultyStudentClassList';
import FacultySchedule from './components/FacultySchedule';
import StudentDashboard from './pages/StudentDashboard';

import Dashboard1 from './components/Dashboard1'; 
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import Dashboard4 from './components/Dashboard4';
import Dashboard5 from './components/Dashboard5';

import PersonalDataForm from './components/PersonalDataForm';
import ECATApplicationForm from './components/ECATApplicationForm';
import AdmissionFormProcess from './components/AdmissionFormProcess';
import AdmissionServices from './components/AdmissionServices'; 
import OfficeOfTheRegistrar from './components/OfficeOfTheRegistrar';     
import LoginEnrollment from './components/LoginEnrollment';

  function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const fetchAuthentication = () => {
      const token = localStorage.getItem('token');
      if(token !== null){
        setIsAuthenticated(true);
      }
    }

    useEffect(() => {
      fetchAuthentication();
    }, []);

    const theme = createTheme({
      typography: {
          fontFamily: "Poppins, sans-serif",
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <header>
            <Navbar isAuthenticated={isAuthenticated}/>
          </header>

          <div className="flex">
            {isAuthenticated && (
              <article className='min-w-[21rem] min-h-screen flex'>
                <SideBar setIsAuthenticated={setIsAuthenticated} style={{height: '100%'}}/>
              </article>
            )}

            <main className='w-full'>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/register_prof" element={<RegisterProf />} />
                <Route path="/" element={<LoginEnrollment setIsAuthenticated={setIsAuthenticated}/>}/>
                <Route path="/login_applicant" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
                <Route path="/login_prof" element={<LoginProf setIsAuthenticated={setIsAuthenticated}/>}/>
                <Route path="/login" element={<LoginEnrollment setIsAuthenticated={setIsAuthenticated}/>}/>
                <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['registrar']}><Dashboard /></ProtectedRoute>}/>
                <Route path="/faculty_dashboard" element={<ProtectedRoute allowedRoles={['faculty']}><FacultyDashboard /></ProtectedRoute>}/>
                <Route path="/applicant_dashboard" element={<ProtectedRoute allowedRoles={['applicant']}><ApplicantDashboard/></ProtectedRoute>} />

                <Route path="/room_registration" element={<ProtectedRoute allowedRoles={['registrar']}><RoomRegistration/></ProtectedRoute>}/> 
                <Route path="/course_management" element={<ProtectedRoute allowedRoles={['registrar']}><CourseManagement/></ProtectedRoute>}/>
                <Route path="/program_tagging" element={<ProtectedRoute allowedRoles={['registrar']}><ProgramTagging/></ProtectedRoute>}/>
                <Route path="/course_panel" element={<ProtectedRoute allowedRoles={['registrar']}><CoursePanel/></ProtectedRoute>}/>
                <Route path="/program_panel" element={<ProtectedRoute allowedRoles={['registrar']}><ProgramPanel/></ProtectedRoute>}/>
                <Route path="/department_section_panel" element={<ProtectedRoute allowedRoles={['registrar']}><DepartmentSection/></ProtectedRoute>}/>
                <Route path="/curriculum_panel" element={<ProtectedRoute allowedRoles={['registrar']}><CurriculumPanel/></ProtectedRoute>}/>
                <Route path="/department_registration" element={<ProtectedRoute allowedRoles={['registrar']}><DepartmentRegistration/></ProtectedRoute>}/>
                <Route path="/section_panel" element={<ProtectedRoute allowedRoles={['registrar']}><SectionPanel/></ProtectedRoute>}/>
                <Route path="/professor_registration" element={<ProtectedRoute allowedRoles={['registrar']}><DepartmentProf/></ProtectedRoute>}/>
                <Route path="/year_level_panel" element={<ProtectedRoute allowedRoles={['registrar']}><YearLevelPanel /></ProtectedRoute>} />
                <Route path="/year_panel" element={<ProtectedRoute allowedRoles={['registrar']}><YearPanel /></ProtectedRoute>} />
                <Route path="/year_update_panel" element={<ProtectedRoute allowedRoles={['registrar']}><YearUpdateForm /></ProtectedRoute>} />
                <Route path="/semester_panel" element={<ProtectedRoute allowedRoles={['registrar']}><SemesterPanel /></ProtectedRoute>} />
                <Route path="/school_year_panel" element={<ProtectedRoute allowedRoles={['registrar']}><SchoolYearPanel /></ProtectedRoute>} />
                <Route path="/school_year_activator_panel" element={<ProtectedRoute allowedRoles={['registrar']}><SchoolYearActivatorPanel /></ProtectedRoute>} />

                <Route path="/requirements_uploader" element={<ProtectedRoute allowedRoles={['applicant']}><RequirementUploader /></ProtectedRoute>} />
                <Route path="/admission_dashboard" element={<ProtectedRoute allowedRoles={['registrar']}><AdmissionDashboardPanel /></ProtectedRoute>} />
                <Route path="/department_dashboard" element={<ProtectedRoute allowedRoles={['registrar']}><DepartmentManagement /></ProtectedRoute>} />
                <Route path="/system_dashboard" element={<ProtectedRoute allowedRoles={['registrar']}><SystemDashboardPanel /></ProtectedRoute>} />
                <Route path="/account_dashboard" element={<ProtectedRoute allowedRoles={['registrar']}><AccountDashboard /></ProtectedRoute>} />
                <Route path="/student_numbering" element={<ProtectedRoute allowedRoles={['registrar']}><StudentNumbering /></ProtectedRoute>} />
                <Route path="/course_tagging" element={<ProtectedRoute allowedRoles={['registrar']}><CourseTagging /></ProtectedRoute>} />
                
                <Route path="/schedule_checker/:dprtmnt_id" element={<ProtectedRoute allowedRoles={['registrar']}><ScheduleChecker /></ProtectedRoute>} />
                <Route path="/change_grade_period" element={<ProtectedRoute  allowedRoles={['registrar']}><ChangeGradingPeriod /></ProtectedRoute>} />
                <Route path="/department_room" element={<ProtectedRoute  allowedRoles={['registrar']}><DepartmentRoom /></ProtectedRoute>} />
                <Route path="/search_cor" element={<ProtectedRoute  allowedRoles={['registrar']}><SearchStudentCOR /></ProtectedRoute>} />
                <Route path="/select_college" element={<ProtectedRoute  allowedRoles={['registrar']}><ScheduleFilterer /></ProtectedRoute>} />

                <Route path="/grading_sheet" element={<ProtectedRoute  allowedRoles={['faculty']}><GradingSheet /></ProtectedRoute>} />
                <Route path="/faculty_workload" element={<ProtectedRoute  allowedRoles={['faculty']}><FacultyWorkload /></ProtectedRoute>} />
                <Route path="/faculty_masterlist" element={<ProtectedRoute  allowedRoles={['faculty']}><FacultyMasterList /></ProtectedRoute>} />
                <Route path="/subject_masterlist/:subject_id/:department_section_id/:school_year_id" element={<ProtectedRoute  allowedRoles={['faculty']}><FacultyStudentClassList /></ProtectedRoute>} />
                <Route path="/faculty_schedule" element={<ProtectedRoute  allowedRoles={['faculty']}><FacultySchedule /></ProtectedRoute>} />
                
                <Route path="/student_dashboard" element={<ProtectedRoute allowedRoles={'student'}><StudentDashboard /></ProtectedRoute>} />
                <Route path="/unauthorized" element={<Unauthorized />} />

                <Route path="/dashboard1" element={<ProtectedRoute allowedRoles={'applicant'}><Dashboard1 /></ProtectedRoute>} />
                <Route path="/dashboard2" element={<ProtectedRoute allowedRoles={'applicant'}><Dashboard2 /></ProtectedRoute>} />
                <Route path="/dashboard3" element={<ProtectedRoute allowedRoles={'applicant'}><Dashboard3 /></ProtectedRoute>} />
                <Route path="/dashboard4" element={<ProtectedRoute allowedRoles={'applicant'}><Dashboard4 /></ProtectedRoute>} />
                <Route path="/dashboard5" element={<ProtectedRoute allowedRoles={'applicant'}><Dashboard5 /></ProtectedRoute>} />

                 <Route path="/personal_data_form" element={<ProtectedRoute allowedRoles={'applicant'}><PersonalDataForm /></ProtectedRoute>} />
                <Route path="/ecat_application_form" element={<ProtectedRoute allowedRoles={'applicant'}><ECATApplicationForm /></ProtectedRoute>} />
                <Route path="/admission_form_process" element={<ProtectedRoute allowedRoles={'applicant'}><AdmissionFormProcess /></ProtectedRoute>} />
                <Route path="/admission_services" element={<ProtectedRoute allowedRoles={'applicant'}><AdmissionServices /></ProtectedRoute>} />
                <Route path="/office_of_the_registrar" element={<ProtectedRoute allowedRoles={'applicant'}><OfficeOfTheRegistrar /></ProtectedRoute>} />
              </Routes>
            </main>
          </div>

            <footer>
              <Footer />
            </footer>
          
        </Router>
      </ThemeProvider>
    )
  }

  export default App