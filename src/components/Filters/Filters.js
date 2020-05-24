import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "@material-ui/core/Slider";
import PriceMaxSlider from "../PriceMaxSlider/PriceMaxSlider";
import { fetchHotels } from "../../actions/hotelsActions";

export default function Filters() {
  const dispatch = useDispatch();
  const starRating = useSelector((state) => state.filters.starRating); // this is an array of number

  const handleCheckBoxChange = (e) => {
    const checked = e.target.checked;
    const ratingType = Number(e.target.value);
    const checkedAction = {
      type: "SET_STAR_RATING",
      payload: {
        ratingType: ratingType,
        checked: checked,
      },
    };
    dispatch(checkedAction);
    dispatch(fetchHotels);
  };
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Star Rating</FormLabel>
        <FormGroup aria-label="position" column>
          <FormControlLabel
            value="2"
            control={<Checkbox checked={starRating.includes(2)} onChange={handleCheckBoxChange} color="primary" />}
            label="2 stars"
            labelPlacement="end"
          />
          <FormControlLabel
            value="3"
            control={<Checkbox checked={starRating.includes(3)} onChange={handleCheckBoxChange} color="primary" />}
            label="3 stars"
            labelPlacement="end"
          />
          <FormControlLabel
            value="4"
            control={<Checkbox checked={starRating.includes(4)} onChange={handleCheckBoxChange} color="primary" />}
            label="4 stars"
            labelPlacement="end"
          />
          <FormControlLabel
            value="5"
            control={<Checkbox checked={starRating.includes(5)} onChange={handleCheckBoxChange} color="primary" />}
            label="5 stars"
            labelPlacement="end"
          />
        </FormGroup>
        <FormLabel component="legend">Maximum Budget</FormLabel>
        <FormGroup aria-label="position" column>
          <PriceMaxSlider />
        </FormGroup>
      </FormControl>
    </>
  );
}
