import React from "react";
import {
  BiMessageAltDetail,
  BiMessageRoundedDots,
  BiShareAlt
} from "react-icons/bi";

//Profile
export default function Profile(props) {
  //Fake profile filler
  const picture = "https://randomuser.me/api/portraits/med/women/50.jpg";
  const name = "Jane Smith";
  const email = "thisdarn@email.com";
  const phoneNumber = "(465)889 8009";
  //check in dates will be populated by lastCheckIn + 30 days

  const checkInDates = React.useMemo(() => {
    return [
      { name: "Hive 1", checkDate: new Date("Oct 25 2022") },
      { name: "Hive 2", checkDate: new Date("Oct 30 2022") },
      { name: "Hive 3", checkDate: new Date("Oct 22 2022") },
      { name: "Hive 4", checkDate: new Date("Oct 30 2022") }
    ].sort((a, b) => {
      return new Date(a.checkDate) - new Date(b.checkDate);
    });
  }, []);

  return (
    <div className="fluid-container m-5 p-0">
      <div className="row text-center rounded bg-1">
        {/*Profile Card*/}
        <div id="profileCard" className="col-sm-4 card card-body m-2">
          <div>
            <img
              id="profilePic"
              className="rounded-circle mx-auto"
              src={props.picture ? props.picture : picture}
              alt="Profile"
            />
          </div>
          <div>
            <h3>{props.name ? props.name : name}</h3>
          </div>
        </div>
        {/*Info Card*/}
        <div
          id="profileInfo"
          className="col-sm-7 card card-body m-2 justify-content-center"
        >
          <div className="row m-1">
            <div className="col-sm-3">
              <p className="card-title border-bottom">Phone </p>
            </div>
            <div className="col-sm-6">
              <p className="card-text text-left">
                {props.phoneNumber ? props.phoneNumber : phoneNumber}
              </p>
            </div>
          </div>
          <div className="row m-1">
            <div className="col-sm-3">
              <p className="card-title border-bottom">Email </p>
            </div>
            <div className="col-sm-9">
              <p className="card-text text-left">
                {props.email ? props.email : email}
              </p>
            </div>
          </div>
        </div>
        {/*Socials Card*/}
        <div id="Socials" className="col-sm-4 card card-body m-2 h-100">
          <button className="btn btn-primary btn-block m-1 row">
            <span>Post</span>
            <BiMessageAltDetail />
          </button>
          <button className="btn btn-primary btn-block m-1 row">
            <span>Message</span>
            <BiMessageRoundedDots />
          </button>
          <button className="btn btn-primary btn-block m-1 row">
            <span>Share</span>
            <BiShareAlt />
          </button>
        </div>
        {/*Check in Card*/}
        <div
          id="checkIn"
          className="col-sm-7 card card-body h-100 m-2 justify-content-center"
        >
          {checkInDates.map((dates, index) => {
            const tempDate = new Date(dates.checkDate);
            const dayPlus30 = tempDate.setDate(dates.checkDate.getDate() + 30);
            let monthDay = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric"
            }).format(dayPlus30);
            return (
              <div className="row m-1 border-bottom border-top">
                <div className="col-sm-3">
                  <p className="card-text">{dates.name}</p>
                </div>
                <div className="col-sm-9 text-left">
                  <p className="card-text">{monthDay}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
