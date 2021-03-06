import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import BookingForm from "../../components/BookingForm/BookingForm";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Review from "../../components/Review/Review";
import getRoomNight from "../../utils/getRoomNight";
import getTotalPrice from "../../utils/getTotalPrice";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Khanh Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Make reservation", "Payment details", "Review your order"];

export default function BookRoom() {
  const detail = useSelector((state) => state.detail);
  const userId = useSelector((state) => state.user.user._id);
  const hotelId = useSelector((state) => state.detail.hotel.id);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRooms, setSelectedRooms] = useState({ standard: 0, deluxe: 0 });
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [cvv, setCvv] = useState("");

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <BookingForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            address={address}
            setAddress={setAddress}
            email={email}
            setEmail={setEmail}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
          />
        );
      case 1:
        return (
          <PaymentForm
            nameOnCard={nameOnCard}
            setNameOnCard={setNameOnCard}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiryDate={expiryDate}
            setExpiryDate={setExpiryDate}
            cvv={cvv}
            setCvv={setCvv}
          />
        );
      case 2:
        return (
          <Review
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            address={address}
            email={email}
            selectedRooms={selectedRooms}
            checkIn={checkIn}
            checkOut={checkOut}
            //
            nameOnCard={nameOnCard}
            cardNumber={cardNumber}
            expiryDate={expiryDate}
            cvv={cvv}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      const payload = {
        creatorId: userId,
        hotelId: hotelId,
        checkIn: checkIn,
        checkOut: checkOut,
        totalPrice: getTotalPrice(getRoomNight(checkIn, checkOut), detail, selectedRooms),
        guestInformation: {
          firstName,
          lastName,
          address,
          email,
          phoneNumber,
        },
        selectedRooms: selectedRooms,
        cc_number: cardNumber,
        cc_exp_month: expiryDate.getMonth() + 1,
        cc_exp_year: expiryDate.getFullYear(),
        cc_cvc: cvv,
      };
      const url = `${process.env.REACT_APP_BASE_API_URL}/booking`;
      const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      debugger;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BORO
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will send you an update
                  when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
