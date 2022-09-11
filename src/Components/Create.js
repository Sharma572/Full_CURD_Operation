import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";

export const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date().toLocaleString() + "");
  
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const histroy = useNavigate();

  // const header = {"Access-Control-Allow-Origin":"*"}
  const handleForm = (e) => {
    e.preventDefault();
    if(name === "" && email === "" ){
        return ""
    }else{
        axios
        .post("https://631627085b85ba9b11f1273a.mockapi.io/Todo-Curd", {
          name: name,
          email: email,
          date:setDate(date),
        })
        .then(() => {
          histroy("/read");
        });
    }
  };
  return (
    <>
        <Navbar />
      <div className="d-flex justify-content-between my-4 mx-5">
        <h3>Create Operation</h3>
        <Link to="/read">
          <button className="btn btn-sm btn-primary">Show Data</button>
        </Link>
      </div>
      <div id="form-Container">
        <form>
          <div className="mb-3">
            <label for="exampleInputname1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={name.length < 5 && email.length < 8}
            onClick={handleForm}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
