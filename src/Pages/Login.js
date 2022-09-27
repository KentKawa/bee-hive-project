import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function Login(props) {
  const [userName, setUserName] = useState(),
    [password, setPassword] = useState();

  const signInCheck = () => {
    const userNameCheck = props.userList.find((ele) => {
      return ele.userName === userName;
    });
    if (userNameCheck) {
      if (userNameCheck.password === password) {
        console.log("return AuthToken");
      }
    } else return console.log("error");
  };
  return (
    <div className="fluid-container row bg-2">
      <div className="card align-items-center m-5 col-sm">
        <div className="col-sm-6 row align-items-center">
          <h1 className="fw-bold col-sm-12">Hello World</h1>
        </div>
        <div className="col-sm-6">
          <label className="fs-5" htmlFor="userName">
            User Name
          </label>
          <input
            required
            className="form-control"
            id="userName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="fs-5" htmlFor="password">
            Password
          </label>
          <input
            required
            className="form-control"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-lg btn-primary m-3"
            type="submit"
            onClick={userName && password ? signInCheck : props.newUser}
          >
            Sign In
          </button>
          <div>
            <p className="card-subtitle">Sign in using</p>
            <button className="btn btn-secondary m-1">
              <FaGoogle />
            </button>
            <button className="btn btn-secondary m-1">
              <FaFacebookF />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
