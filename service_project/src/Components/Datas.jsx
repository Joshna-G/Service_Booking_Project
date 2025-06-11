import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export const Datas = () => {

const navCreate = useNavigate();
const navEdit = useNavigate();
const navRead = useNavigate();



const handleUpdate = (id) => {
  navEdit(`/Updatedata/${id}`);
};

const handleCreate = () => {
  navCreate('/Registration');
};


 const handleRead = (ID) => {
  navRead(`/ReadData/${ID}`);
}; 

//fetch data on  mount
const [info, setInfo] = useState([])
useEffect(() => {
  axios.get("http://localhost:8000/")
  .then(res => setInfo(res.data))
  .catch(err => console.log(err))
},[]);

//Delete
const handleDelete = (ID) => {
  axios.delete("http://localhost:8000/delete/" +ID)
  .then(res => res.data)
  .catch(err => console.log(err))
};

  return (
    <>
    <div className="container-fluied">
      <h2 className="text-center mb-4">Booking Data's</h2>
      <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email ID</th>
            <th>Mobile No.</th>
            <th>Product</th>
            <th>Mode Of Service</th>
            <th>Warranty</th>
            <th>Add Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
      <tbody>
        {info.map((data,index) => (
          <tr key={index}>
            <td>{data.ID}</td>
            <td>{data.Name}</td>
            <td>{data.Address}</td>
            <td>{data.Email}</td>
            <td>{data.Mobile}</td>
            <td>{data.Product}</td>
            <td>{data.Mode_ser}</td>
            <td>{data.War_in_year}</td>
            <td>{data.Add_note}</td>
            <td className="text-center">
              <button className="btn btn-sm btn-success me-2" onClick={() => handleUpdate(data.ID)}>Edit</button>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleRead(data.ID)}>Read</button>
              <button className="btn btn-sm btn-danger"onClick={() => handleDelete(data.ID)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
    <div className="d-flex justify-content-end mt-3">
    <button className="btn btn-primary" onClick={handleCreate}>Update Data</button>
    </div>
    </div>
    </>
  )
}
