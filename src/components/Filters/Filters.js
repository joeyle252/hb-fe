import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "@material-ui/core/Slider";
import PriceMaxSlider from "../PriceMaxSlider/PriceMaxSlider";

export default function Filters() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Star Rating</FormLabel>
        <FormGroup aria-label="position" column>
          <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
          <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
          <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
          <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
        </FormGroup>
        <FormLabel component="legend">Maximum Budget</FormLabel>
        <FormGroup aria-label="position" column>
          <PriceMaxSlider />
        </FormGroup>
      </FormControl>
    </>
  );
}
