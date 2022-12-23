import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import cuisinesData from "./data/cuisines";
import StyledSelection from "./components/styled-selection";
function App() {
  const [cuisine, setCuisine] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCuisine(event.target.value);
  };

  return (
    <Box sx={{ width: "80%", maxWidth: 1200, margin: "auto" }}>
      <StyledSelection data={cuisinesData} />
    </Box>
  );
}

export default App;
