const getRoomNight = (checkIn, checkOut) => {
  const oneDay = 24 * 60 * 60 * 1000;
  var date1 = new Date(checkOut);
  var date2 = new Date(checkIn);
  const rn = Math.round(Math.abs((date1 - date2) / oneDay));
  return rn;
};

export default getRoomNight;
