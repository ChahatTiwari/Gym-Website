import { Box } from "@mui/system";
import React from "react";

const horizontalSearchBar = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Box key={item}>{item}</Box>
      ))}
    </>
  );
};

export default horizontalSearchBar;
