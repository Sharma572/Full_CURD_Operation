import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const histroy = useNavigate();

  // const header = {"Access-Control-Allow-Origin":"*"}
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("https://631627085b85ba9b11f1273a.mockapi.io/Todo-Curd", {
      name: name,
      email: email,
    })
    .then(()=>{
        histroy('/read')
    });
  };
  return (
    <>
      <div id="form-Container">
        <h1>Create</h1>
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
            onClick={handleForm}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
