/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";

export default function ComboBox() {
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
        <TextField {...params} label="Destionation" variant="outlined" />
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
  { title: "Vinh Ha Long" },
];
