import React from "react";
import "date-fns";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import MaskedInput from "react-text-mask";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function TextMaskCustomCvv(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export default function PaymentForm(props) {
  const { nameOnCard, setNameOnCard, cardNumber, setCardNumber, expiryDate, setExpiryDate, cvv, setCvv } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid inline container spacing={3}>
        <Grid item xs={12} md={6} inline>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            value={nameOnCard}
            onChange={(e) => {
              setNameOnCard(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            margin="normal"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container item xs={12} sm={6} inline>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-inline"
              label="Expiry Date"
              format="MM/dd/yyyy"
              onChange={(date) => {
                setExpiryDate(date);
              }}
              value={expiryDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={12} md={6}>
          <Input
            margin="normal"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustomCvv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

PaymentForm.propTypes = {
  setExpiryDate: PropTypes.func.isRequired,
};
