// import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom'
import{box} from '@mui/material'
import './App.css';
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <box width="400px" sx={{width: {xl: '1400px'}}} m ="auto">
      <Navbar />
      <routes>
        <route path="/" element={<Home></Home>}></route>
        <route path="/excercise/:id" element={<ExerciseDetails />}></route>
      </routes>
        <Footer />
        <Home></Home>

      hii app.js
    </box>
  
    
  );
}

export default App;
