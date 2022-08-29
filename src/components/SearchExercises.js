import React , {useState,useEffect}from 'react'
import { Stack,Typography , Box , Button , TextField } from '@mui/material'



const SearchExercises = () => {

  const [search , setSearch] = useState('')

  // console.log(onchange,"setSearch")
  return (
    
    <Stack alignItems="center" justifyContent="center" mt='37px' p="20px">
  
    <Typography fontWeight={700} sx={{Fontsize:{lg:"44px" ,xs:'30px'}}}mb="50px" textAlign="center">
      Awesome Exercises<br /> you should Know!!
    </Typography>
    <Box position="relative" mb="72px">
      <TextField sx={{input:{
        fontWeight:"700",
        border: 'none',
        borderRadius:"4px"
      },
      width:{lg:"800px",xs:"350px"},
      backgroundColor:"#fff",
      borderRadius:"40px"
      }} height="76px" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search exercies..." type="text">
        


      </TextField>
      {/* console.log(setSearch,"se") */}
      <Button className='search-btn' sx={{bgcolor:"#ff2625",
    color:"#fff",
    textTransform:"none",
    width:{lg:"175px",xs:"100px"},
    fontSize:{lG:"20px", xs:"14px"},
    height:"50px",
    position:"absolute",
    right:"0"}} >Search</Button>
    
    </Box>
    
   </Stack>
  )
}

export default SearchExercises