import axios from "axios"
import { useState,useEffect } from "react"

export const ReadData=()=>{

    const [data,setData]=useState([])

 function getData(){
        axios.get('https://631627085b85ba9b11f1273a.mockapi.io/Todo-Curd')
        .then((res)=>{
            console.log(res);
            setData(res.data)
        })
    }

    const deleteData=(index)=>{
        console.log(index);
      axios.delete(`https://631627085b85ba9b11f1273a.mockapi.io/Todo-Curd/${index}`)
      .then(()=>{
        getData();
      })
    }

    useEffect(() => {
      getData();
    },[]);

    
    return(
        <>
        <h3>Read Components</h3>
<div className="col-8 mx-auto">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
    data.map((ele,index)=>{
        return(
            <>
             <tbody>
    <tr key={index}>
      <th scope="row">{ele.id}</th>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td><button className="btn btn-sm btn-success">Edit</button></td>
      <td><button className="btn btn-sm btn-danger" onClick={()=>deleteData(ele.id)}>Delete</button></td>
    </tr>
  
  </tbody>
            </>
        )
    })
  }
 
</table>
</div>
        </>
    )
}