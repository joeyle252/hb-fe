import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import getRoomNight from "../../utils/getRoomNight";
import getTotalPrice from "../../utils/getTotalPrice";
import { useSelector } from "react-redux";

export default function Review(props) {
  const detail = useSelector((state) => state.detail);
  const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
  }));
  const {
    firstName,
    lastName,
    phoneNumber,
    address,
    email,
    selectedRooms,
    checkIn,
    checkOut,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  } = props;
  const products = [
    { label: "First Name", value: firstName },
    { label: "Last Name", value: lastName },
    { label: "Email", value: email },
    { label: "Address", value: address },
    { label: "Phone Number", value: phoneNumber },

    { label: "Card Holder Name", value: nameOnCard },
    { label: "Card Number ", value: cardNumber },
    { label: "Expiry Date ", value: expiryDate.toString() },
    { label: "CVV ", value: cvv },

    { label: "Check In Date ", value: checkIn.toString() },
    { label: "check Out Date", value: checkOut.toString() },
    { label: "Room Night", value: getRoomNight(checkIn, checkOut) },
  ];

  if (selectedRooms.standard > 0) {
    products.push({ label: "Standard Rooms", value: selectedRooms.standard });
  }
  if (selectedRooms.deluxe > 0) {
    products.push({ label: "Deluxe Rooms", value: selectedRooms.deluxe });
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product, idx) => (
          <ListItem className={classes.listItem} key={idx}>
            <ListItemText primary={product.label} />
            <Typography variant="body2">{product.value}</Typography>
          </ListItem>
        ))}
        <p> total: {getTotalPrice(getRoomNight(checkIn, checkOut), detail, selectedRooms)} </p>
      </List>
    </React.Fragment>
  );
}
