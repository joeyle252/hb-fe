/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";

export default function ComboBox(props) {
  const dispatch = useDispatch();
  const handleDestinationChange = (e, value) => {
    const action = {
      type: "SET_DESTINATION",
      payload: { destination: value ? value.title : null },
    };
    dispatch(action);
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={destinations}
      getOptionLabel={(option) => option.title}
      onChange={handleDestinationChange}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          error={props.errorMessage}
          helperText={props.errorMessage}
          required
          {...params}
          label="Destination"
          variant="outlined"
        />
      )}
    />
  );
}
const destinations = [
  { title: "Da Lat" },
  { title: "Vung Tau" },
  { title: "Phan Thiet" },
  { title: "Nha Trang" },
  { title: "Da Nang" },
  { title: "Phu Quoc" },
  { title: "Quy Nhon" },
  { title: "Hoi An" },
  { title: "Ha Noi" },
];
