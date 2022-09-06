import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ReadData = () => {
  const [data, setData] = useState([]);
  const [tableTheme, setTableTheme] = useState("");


  function getData() {
    axios
      .get("https://631627085b85ba9b11f1273a.mockapi.io/Todo-Curd")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }

  const deleteData = (index) => {
    console.log(index);
    axios
      .delete(`https://631627085b85ba9b11f1273a.mockapi.io/Todo-Curd/${index}`)
      .then(() => {
        getData();
      });
  };

  const setToLocal = (id, name, email) => {
    console.log("clicked");
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

<div class="form-check form-switch mx-5 my-2">
  <input class="form-check-input" type="checkbox" onClick={()=>{
    if (tableTheme === "table-dark table-hover") setTableTheme("");
    else setTableTheme("table-dark table-hover");
  }} />
</div>

      <div className="d-flex justify-content-between my-4 mx-5">
        <h3>Read Operation</h3>
        <Link to="/">
          <button className="btn btn-sm btn-success">Add Data</button>
        </Link>
      </div>
      <div className="col-8 mx-auto">
        <table class={`table ${tableTheme}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {data.map((ele, index) => {
            return (
              <>
                <tbody>
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() =>
                            setToLocal(ele.id, ele.name, ele.email)
                          }
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteData(ele.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};
