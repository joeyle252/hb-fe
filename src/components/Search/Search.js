import "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import ComboBox from "./destination";
import { validateSearchFields } from "../../actions/searchActions";
import { fetchHotels } from "../../actions/hotelsActions";
import "./search.css";

export default function MaterialUIPickers() {
  const dispatch = useDispatch();
  const checkIn = useSelector((state) => state.search.checkIn);
  const checkOut = useSelector((state) => state.search.checkOut);
  const roomQuantity = useSelector((state) => state.search.roomQuantity);
  const errors = useSelector((state) => state.search.errors);
  //const destination = useSelector((state) => state.search.destination);
  //const [selectedDestination, setSelectedDestination] = useState("");
  //const [selectedCheckinDate, setSelectedCheckinDate] = useState(new Date());
  //const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(new Date());
  //const [roomQuantity, setRoomQuantity] = useState(0);

  // const handleDestinationChange = (option) => {
  //   console.log(option);
  //   //setSelectedDestination(e.target.value);
  //   const action = {
  //     type: "SET_DESTINATION",
  //     payload: { destination: option },
  //   };

  //   dispatch(action);
  // };

  const handleCheckinDateChange = (date) => {
    //setSelectedCheckinDate(date);
    const action = { type: "SET_CHECKIN", payload: { checkIn: date.toISOString() } };
    dispatch(action);
  };

  const handleCheckoutDateChange = (date) => {
    //setSelectedCheckoutDate(date);
    const action = { type: "SET_CHECKOUT", payload: { checkOut: date.toISOString() } };
    dispatch(action);
  };

  const handleRoomQuantityChange = (e) => {
    const val = e.target.value;
    if (/^[1-9]+$/.test(val)) {
      // check if the val is number or not
      //setRoomQuantity(val);
      const action = {
        type: "SET_ROOM_QUANTITY",
        payload: { roomQuantity: val },
      };
      dispatch(action);
    }
  };

  const onSearchClick = () => {
    dispatch(validateSearchFields);
    dispatch(fetchHotels);
  };

  return (
    <>
      <div className="container-search">
        {/* <video autoPlay loop muted>
          <source type="video/mp4" src="https://tinyurl.com/y5x5jmnf" />
          <source type="video/webm" src="https://tinyurl.com/y6q5jxr6" />
        </video> */}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ display: "flex", justifyContent: "center" }}>HOTEL, RESORT AND MORE THAN THAT</p>
          <p style={{ display: "flex", justifyContent: "center" }}>
            Receive the best rate for over thousands hotel all over the world
          </p>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container flex="true" direction="column" justify="space-around" alignItems="center">
            <ComboBox
              id="standard-basic"
              label="Destination"
              //value={destination}
              getOptionLabel={(option) => option.title}
              errorMessage={errors.destination}
            />
            <div inline="true">
              <KeyboardDatePicker
                error={errors.checkIn}
                helperText={errors.checkIn}
                required
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Check in"
                name="checkin"
                value={checkIn}
                onChange={handleCheckinDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                error={errors.checkOut}
                helperText={errors.checkOut}
                required
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Check out"
                name="checkin"
                value={checkOut}
                onChange={handleCheckoutDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </div>
            <div inline="true">
              <TextField
                error={errors.roomQuantity}
                helperText={errors.roomQuantity}
                required
                id="standard-number"
                type="number"
                label="Number of room"
                value={roomQuantity}
                onChange={handleRoomQuantityChange}
              />
              <Button
                onClick={onSearchClick}
                margin="normal"
                variant="contained"
                color="primary"
                disableElevation
                style={{ width: "230px", marginTop: "6%" }}
              >
                Search
              </Button>
            </div>
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}
