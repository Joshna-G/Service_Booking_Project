import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const ReadData = () => {
    const {ID} = useParams();
    const navBack = useNavigate();

    const [readData, setReadData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/readData/${ID}`)
        .then(res => setReadData(res.data[0]))
        .catch(err => console.log(err))
    },[]);
  return (
    <>
    <div className="container mx-auto">
    <div><h1 className="text-center ">Read Data</h1></div>
        <table className="mx-auto">
            <tr>
                <td>ID:</td>
                <td>{readData.ID}</td>
            </tr>
            <tr>
                <td>Name:</td>
                <td>{readData.Name}</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>{readData.Mobile}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{readData.Address}</td>
            </tr>
            <tr>
                <td>Mobile:</td>
                <td>{readData.Email}</td>
            </tr>
            <tr>
                <td>Product:</td>
                <td>{readData.Product}</td>
            </tr>
            <tr>
                <td>Mode of Service:</td>
                <td>{readData.Mode_ser}</td>
            </tr>
            <tr>
                <td>Warranty:</td>
                <td>{readData.War_in_year}</td>
            </tr>
            <tr>
                <td>Additional Notes:</td>
                <td>{readData.Add_note}</td>
            </tr>
        </table>
      
        
        <div className="container text-center my-2">
    <button className="btn btn-primary  mx-2 fw-bold text-white" onClick={() => navBack('/Datas')}>Back</button>
    <button className="btn btn-danger mx-auto fw-bold text-white">Edit</button>
        </div>
    </div>
    </>
  )
}
