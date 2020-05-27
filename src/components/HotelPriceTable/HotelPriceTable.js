import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function HotelPriceTable() {
  const availableRooms = useSelector((state) => state.detail.hotel.availableRooms);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Room Type</TableCell>
            <TableCell align="right">Room Available</TableCell>
            <TableCell align="right">Room Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {availableRooms.map((room) => (
            <TableRow key={room.type}>
              <TableCell component="th" scope="row">
                {room.type}
              </TableCell>
              <TableCell align="right">{room.quantity}</TableCell>
              <TableCell align="right">{room.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
