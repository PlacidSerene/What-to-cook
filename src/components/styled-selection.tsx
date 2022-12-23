import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface propsType<T> {
  data: T[];
}

const StyledSelection = (props: propsType<string>) => {
  const { data } = props;
  const [option, setOption] = useState("");
  const handleSelectOption = (e: SelectChangeEvent) => {
    setOption(e.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Cuisine</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={option}
        label="Cuisine"
        onChange={handleSelectOption}
      >
        {data.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StyledSelection