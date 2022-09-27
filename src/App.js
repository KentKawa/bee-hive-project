import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useRef } from "react";
import Login from "./Pages/Login.js";
import Profile from "./Pages/Profile.js";
import MapPage from "./Pages/MapPage.js";
import List from "./Components/List";
import data from "./userData.json";

//List of random users
const userList = [];

export default function App() {
  const [data, setData] = useState([]),
    [isLoaded, setIsLoaded] = useState(false),
    [openForm, setOpenForm] = useState(false),
    [openMapForm, setOpenMapForm] = useState(false);

  const openMapFormHandler = () => {
    setOpenMapForm(!openMapForm);
    console.log(openMapForm);
  };

  const openFormHandler = () => {
    setOpenForm(!openForm);
  };

  //How we store new Users
  class User {
    constructor(
      id,
      name,
      userName,
      password,
      picture,
      email,
      phoneNumber,
      hiveList
    ) {
      this.id = id;
      this.name = name;
      this.userName = userName;
      this.password = password;
      this.picture = picture;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.hiveList = hiveList;
    }
  }

  // Registration Flow
  // 1. Check the database to see if the user already exists
  //   1a. If so, return an error
  // 2. Make sure all the required info was provided (username, password)
  //   2a. If not, return an error
  // 3. Insert into database: db.insertData({ username: request.username, password: hash(request.password) })
  // 4. Return some sort of authentication token to say you're logged in
  // 5. On the client, I can call myapi.com/profile/me and get back my profile

  //Calling API for new random user
  const randomPersonAPI = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setData(data);
      setIsLoaded(true);
      if (data) {
        if (!userList.some((user) => user.id === data.results[0].id.value)) {
          let user = new User();
          user.id = data.results[0].id.value;
          user.name =
            data.results[0].name.first + " " + data.results[0].name.last;
          user.userName = data.results[0].login.username;
          user.password = data.results[0].login.password;
          user.picture = data.results[0].picture.medium;
          user.email = data.results[0].email;
          user.phoneNumber = data.results[0].phone;
          userList.push(user);
        }
      }
    } catch (error) {
      console.log(error);
      randomPersonAPI();
    }
  };

  const submitFormHandler = (
    arr,
    name,
    weight,
    queenPlaced,
    location,
    temperament,
    meds,
    disease
  ) => {
    arr.push({
      name: name,
      weight: weight,
      queenPlaced: queenPlaced,
      location: location,
      temperament: temperament,
      meds: meds,
      disease: disease
    });
    setOpenForm(!openForm);
    setOpenMapForm(false);
    console.log(arr);
  };
  console.log(userList);
  return (
    <div className="App">
      <Login newUser={randomPersonAPI} userList={userList} />
      {/* <Profile /> 
      <List
        openFormHandler={openFormHandler}
        openForm={openForm}
        openMapFormHandler={openMapFormHandler}
        openMapForm={openMapForm}
        submit={submitFormHandler}
      />
      <MapPage /> */}
    </div>
  );
}
