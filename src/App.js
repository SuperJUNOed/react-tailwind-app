import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import MainPage from './pages/Main';

function App() {
  return (
    // <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    // <div className="max-w-md w-full space-y-8">
    <div className='min-h-full'>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  //   </div>
  // </div>
  );
}

export default App;