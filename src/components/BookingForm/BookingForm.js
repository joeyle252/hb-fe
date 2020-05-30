import "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import getRoomNight from "../../utils/getRoomNight";

export default function BookingForm(props) {
  const availableRooms = useSelector((state) => state.detail.hotel && state.detail.hotel.availableRooms);
  // if state.detail.hotel null => return null otherwise return state.detail.hotel.availablerooms
  const roomType = [{ title: "Standard" }, { title: "Deluxe" }];

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    email,
    setEmail,
    selectedRooms,
    setSelectedRooms,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
  } = props;

  console.log("roomnight", getRoomNight(checkIn, checkOut));

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Make reservation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Email"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Phone Number"
            fullWidth
            autoComplete="shipping country"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <Grid item xs={12} sm={4}>
              <KeyboardDatePicker
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Check In"
                onChange={(date) => {
                  setCheckIn(date);
                }}
                value={checkIn}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Check Out"
                format="MM/dd/yyyy"
                onChange={(date) => {
                  setCheckOut(date);
                }}
                value={checkOut}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="Room night" fullWidth value={getRoomNight(checkIn, checkOut)} />
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Room Type</TableCell>
                  <TableCell align="center">Room Available</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {availableRooms &&
                  availableRooms.map((room) => (
                    <TableRow key={room.type}>
                      <TableCell component="th" scope="row" align="center">
                        {room.type}
                      </TableCell>
                      <TableCell align="center">
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedRooms[room.type]}
                          onChange={(e) => {
                            setSelectedRooms(() => {
                              return {
                                ...selectedRooms,
                                [room.type]: e.target.value,
                              };
                            });
                          }}
                        >
                          {[...Array(room.quantity + 1).keys()].map((num) => {
                            return (
                              <MenuItem key={num} value={num}>
                                {num}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MuiPickersUtilsProvider>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
