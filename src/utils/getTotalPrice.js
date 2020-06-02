const getTotalPrice = (roomNights, detail, selectedRooms) => {
  const standardPrice = detail.hotel.availableRooms.find((room) => room.type.toLowerCase() === "standard").price;
  const standardRoomQuantity = selectedRooms.standard;

  const deluxePrice = detail.hotel.availableRooms.find((room) => room.type.toLowerCase() === "deluxe").price;
  const deluxeRoomQuantity = selectedRooms.deluxe;

  const totalPrice = roomNights * (standardPrice * standardRoomQuantity + deluxePrice * deluxeRoomQuantity);
  return totalPrice;
};
export default getTotalPrice;
