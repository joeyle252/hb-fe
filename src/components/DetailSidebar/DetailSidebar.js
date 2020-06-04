import React from "react";
import { useSelector } from "react-redux";

export default function DetailSide() {
  const hotel = useSelector((state) => state.detail.hotel);
  return (
    <div className="googlemap-area">
      <div className="card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.636676124255!2d106.7053297500549!3d10.76245906235744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f693a5128df%3A0x76966b260234240b!2zQ29wYWMgU3F1YXJlLCAxMiDEkMaw4budbmcgVMO0biDEkOG6o24sIFBoxrDhu51uZyAxMywgUXXhuq1uIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1590420942871!5m2!1svi!2s"
          width="100"
          height="100"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          style={{ height: "200px", width: "202px" }}
        ></iframe>
      </div>
      <div>
        {
          <p>
            <span style={{ fontWeight: "bold", fontSize: "40px" }}> Description:</span> {hotel.description}
          </p>
        }
      </div>
    </div>
  );
}
