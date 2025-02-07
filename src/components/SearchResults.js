import moment from "moment/moment";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import "../App.css";

const SearchResult = prop => {
  const bookingsDetails = prop.results;

  const [clickedRow, SetClickedRow] = useState();
  const [customerId, setCustomerId] = useState(-1);

  function handleRowClicked(index) {
    console.log("clicked");

    SetClickedRow(index);
  }

  const showProfile = id => {
    setCustomerId(id);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights Stay</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        {bookingsDetails.map((e, index) => {
          let myDate = moment(e.checkOutDate).diff(e.checkInDate, "days");
          return (
            <tbody>
              <tr
                key={index}
                onClick={() => handleRowClicked(index)}
                className={clickedRow == index ? "highlight" : null}
              >
                <th>{e.id}</th>
                <td>{e.title}</td>
                <td>{e.firstName}</td>
                <td>{e.surname}</td>
                <td>{e.email}</td>
                <td>{e.roomId}</td>
                <td>{e.checkInDate}</td>
                <td>{e.checkOutDate}</td>
                <td>{myDate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => showProfile(e.id)}
                  >
                    Show Profile
                  </button>
                </td>

                <td />
              </tr>
            </tbody>
          );
        })}
      </table>
      {customerId > -1 ? <CustomerProfile id={customerId} /> : null}
    </div>
  );
};

export default SearchResult;
