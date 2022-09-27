import { useState, useRef } from "react";
import Map from "./MapForm";

export default function HiveForm(props) {
  const [name, setName] = useState(""),
    [weight, setWeight] = useState(""),
    [queenPlaced, setQueenPlaced] = useState(""),
    location = useRef([]),
    [temperament, setTemperament] = useState(10),
    [meds, setMeds] = useState([]),
    [disease, setDisease] = useState([]);

  const rangeHandler = (e) => {
    setTemperament(Number(e.target.value));
    console.log(temperament);
  };

  const temperamentName = () => {
    if (temperament <= 2) {
      return "Very-passive";
    } else if (temperament <= 4) {
      return "Passive";
    } else if (temperament <= 6) {
      return "Neutral";
    } else if (temperament <= 8) {
      return "Aggressive";
    } else {
      return "Very-aggressive";
    }
  };

  const checkboxDiseaseHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setDisease([...disease, e.target.nextElementSibling.textContent]);
    } else {
      let index = disease.indexOf(e.target.nextElementSibling.textContent);
      let tempArray = [...disease];
      tempArray.splice(index, 1);
      setDisease(tempArray);
    }
  };

  const checkboxMedsHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setMeds([...meds, e.target.nextElementSibling.textContent]);
    } else {
      let index = meds.indexOf(e.target.nextElementSibling.textContent);
      let tempArray = [...disease];
      tempArray.splice(index, 1);
      setMeds(tempArray);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="row card-body justify-content-center align-items-center"
      >
        {/* ------Name------ */}
        <div className="text-left">
          <label htmlFor="formName">Name</label>
          <input
            id="formName"
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        {/* -------Weight------ */}
        <div className="text-left">
          <label htmlFor="formWeight">Weight</label>
          <input
            id="formWeight"
            type="number"
            className="form-control"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            value={weight}
          />
          <small id="formWeightHelp" className="form-text text-muted">
            Weight in pounds
          </small>
        </div>
        {/* ------Temperament------ */}
        <div className="text-center col-sm-7">
          <label className="col-sm-12" htmlFor="formTemperament">
            Temperament
          </label>
          <input
            id="formTemperament"
            type="range"
            min="1"
            max="10"
            className="form-control-range m-2 col-sm-12"
            onChange={rangeHandler}
          />
          <small className="form-text text-muted col-sm-12" id="temperament">
            {temperamentName()}
          </small>
        </div>
        {/* ------Date of Queen Placement------ */}
        <div className="text-left col-sm-5">
          <label htmlFor="formDate">Date of Queen Placement</label>
          <input
            id="formDate"
            type="Date"
            className="form-control"
            onChange={(e) => {
              setQueenPlaced(e.target.value);
            }}
            value={queenPlaced}
          />
        </div>
        {/* -------Map------- */}
        <div className="text-left d-grid">
          <button
            className="btn btn-secondary dropdown-toggle"
            onClick={props.mapButton}
          >
            Location
          </button>
          <div className="dropdown-item">
            {props.openMap ? <Map location={location} /> : ""}
          </div>
        </div>
        {/* ------Meds------ */}
        <div className="text-left">
          <label htmlFor="formMeds">Medicine</label>
          <div id="formMeds" className="row">
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="mites+"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxMedsHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="mites+">
                Mites+
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="foulBrood+"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxMedsHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="foulBrood+">
                Foul Brood+
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="nosema+"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxMedsHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="nosema+">
                Nosema+
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="beetle+"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxMedsHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="beetle+">
                Beetle+
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="moth+"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxMedsHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="moth+">
                Moth+
              </label>
            </div>
          </div>
        </div>
        {/* ------Disease/Pests------ */}
        <div className="text-left">
          <label htmlFor="formDisease">Disease/Pests</label>
          <div id="formDisease" className="row">
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="varroaMites"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxDiseaseHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="varroaMites">
                Varroa mites
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="trachealMites"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxDiseaseHandler}
              />
              <label
                className="m-1 custom-control-label"
                htmlFor="trachealMites"
              >
                Tracheal mites
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="nosema"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxDiseaseHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="nosema">
                Nosema
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="sacbrood"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxDiseaseHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="sacbrood">
                Sacbrood
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="chalkbrood"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxDiseaseHandler}
              />
              <label className="m-1 custom-control-label" htmlFor="chalkbrood">
                Chalkbrood
              </label>
            </div>
            <div className="col-sm-4 custom-control custom-checkbox">
              <input
                id="americanFoulbrood"
                type="checkbox"
                className="custom-control-input"
                onChange={checkboxDiseaseHandler}
              />
              <label
                className="m-1 custom-control-label"
                htmlFor="americanFoulbrood"
              >
                American foulbrood
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={() => {
            props.submit(
              props.userHives,
              name,
              weight,
              queenPlaced,
              location.current,
              temperament,
              meds,
              disease
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
