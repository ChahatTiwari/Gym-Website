import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, Button, TextField } from "@mui/material";
import { exerciesOptions, fetchData } from "../utils/fetchData.js";
import HorizontalSearchBar from "./HorizontalSearchBar.js";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciesOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciesOptions
      );
      const searchExercises = exerciseData.filter(
        (e) =>
          e.name.includes(search) ||
          e.target.includes(search) ||
          e.equipment.includes(search) ||
          e.bodyPart.includes(search)
      );
      console.log(exerciseData);

      setExercise(searchExercises);
    }
    setSearch("");
  };

  // console.log(onchange,"setSearch")
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ Fontsize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises
        <br /> you should Know!!
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search exercies..."
          type="text"
        ></TextField>
   
        {/* console.log(setSearch,"se") */}
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "100px" },
            fontSize: { lG: "20px", xs: "14px" },
            height: "50px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{p:"30px" , position:'relative' , width:'100%' }}> 
      <HorizontalSearchBar data={bodyParts} />
      hii
      </Box>
    </Stack>
  );
};

export default SearchExercises;
