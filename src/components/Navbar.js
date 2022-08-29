import React from 'react'
import { margin, Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
   <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: '122px',xs:'40px'},mt:{sm:'32px',xs:'20px'} ,justifyContent:"none"}} px="20px" >
    <Link to='/'>
        <img src={Logo} alt="Logo" style={{width: '48px', margin:'0 20px' , height:'48px' }}/>
    </Link>
    <Stack direction="row" gap="40px" alignItems="flex-end">

        <Link to="/" style={{textDecoration:'none',borderBottom:'2px solid #ff2625',color:'#3A1212'}}>Home</Link>
        <Link to="/" style={{textDecoration:'none', color:'#3A1212'}}>Exercises</Link>
    </Stack>
   </Stack>
  )
}

export default Navbar