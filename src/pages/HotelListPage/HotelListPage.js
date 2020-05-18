import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Filters from "../../components/Filters/Filters";
import HotelList from "../../components/HotelList/HotelList";

function SignUpForm(props) {
  const close =()=>{
    props.setShowSignUpForm(false)
  }
  return (
    <>
      <div> mock sign up form</div>
      <button onClick={close} > close form</button>
    </>
  );
}
export default function HotelListPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const signUp = () => {
    setShowSignUpForm(true);
  };
  return (
    <>
      <Navbar onClick={signUp} />
      <Search />
      <Filters />
      {showSignUpForm && <SignUpForm setShowSignUpForm={setShowSignUpForm} />}
      <HotelList />
    </>
  );
}
