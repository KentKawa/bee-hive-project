import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import HiveForm from "./HiveForm.js";
import MapList from "./MapList.js";

const userHives = [
  {
    name: "Hive 1",
    weight: 10,
    queenPlaced: "9/14/2022",
    location: [],
    temperament: "passive",
    meds: ["none"],
    disease: ["none"]
  },
  {
    name: "Hive 2",
    weight: 50,
    queenPlaced: "8/1/2022",
    location: [43.42, 110.58],
    temperament: "passive",
    meds: ["other honey"],
    disease: ["mites"]
  },
  {
    name: "Hive 3",
    weight: 8,
    queenPlaced: "8/10/2022",
    location: [42.0, 108.58],
    temperament: "aggressive",
    meds: ["stuff"],
    disease: ["mites"]
  },
  {
    name: "Hive 4",
    weight: 7,
    queenPlaced: "7/25/2022",
    location: [44.42, 110.58],
    temperament: "passive",
    meds: ["none"],
    disease: ["none"]
  }
];

const ListItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className="list-group-item bg-light"
        key={props.index}
      >
        <div className="row">
          <div className="col d-inline badge bg-dark">
            <h3>{props.ele.name}</h3>
          </div>
          <div className="col d-inline justify-content-start">
            <div className="d-flex justify-content-start">
              {props.ele.meds.map((meds) => {
                return <span className="badge bg-primary me-1">{meds}</span>;
              })}
            </div>
            <div className="d-flex justify-content-start">
              {props.ele.disease.map((disease) => {
                return <span className="badge bg-danger me-1">{disease}</span>;
              })}
            </div>
          </div>
          <div className="d-flex col justify-content-end">
            <button className="btn btn-outline-secondary btn-sm">
              <AiFillEdit />
            </button>
            <button className="btn btn-outline-danger btn-sm">
              <AiFillDelete />
            </button>
          </div>
        </div>
      </li>{" "}
      <div className="dropdown-item">
        {props.ele.location.length > 1 && open ? (
          <MapList invalideSize latlng={props.ele.location} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const List = (props) => {
  return (
    <div className="fluid-container m-5 p-0">
      <div className="row text-center rounded bg-1">
        <div className="col-sm-12 card-body m-2 row justify-content-around">
          <h1 className="display-5 col-sm-10 font-monospace">Hives</h1>
          <button
            className="btn btn-primary col-sm-1 m-auto"
            onClick={props.openFormHandler}
          >
            <BsPlusLg />
          </button>
        </div>
        <div id="formContainer" className="card m-2 col-sm">
          {props.openForm ? (
            <HiveForm
              openMap={props.openMapForm}
              mapButton={props.openMapFormHandler}
              submit={props.submit}
              userHives={userHives}
            />
          ) : null}
        </div>
        <div className="m-2 row">
          <ul className="list-group col-sm-12">
            {userHives.map((ele, index) => {
              return <ListItem ele={ele} index={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
