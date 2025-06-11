import { Link, useNavigate } from "react-router-dom";
import logo from '../Media_img/service-logopng-img.png';
import { useState } from "react";
import axios from 'axios';

export const Registration = () => {

  const navBack = useNavigate()   //To Navigate

    //state for form fields
    const [formData, setFormData] = useState({
      name: "",
      address: "",
      email: "",
      mobile: "",
      product: "",
      mode: "",
      war_in_year: "",
      notes: ""
    });
  
    //handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData, [name]: value});   //data redirecting ...formData
    };
  
    //handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();  // stop the auto refreshing
      axios.post('http://localhost:8000/Registration', formData)  //use POST request
      .then(res => {
        console.log(res);
        navBack('/Datas');   //Navigate to Data's page
      })
      .catch(err => console.log(err))
    
  };

  return (
    <>
     <div className="container-fluid bg-info py-2 w-100 shadow-lg rounded navbar-fixed top-0">
         <div className="d-flex justify-content-between align-items-center px-3">
            <img className="img-fluid logo_img" src={logo}/>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Home'>Home</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/About'>About</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Services'>Services</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Registration'>Registration</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Datas'>Data's</Link>
         <button className="h5 btn btn-secondary text-white btn-outline-dark p-2">+91 988 8989 909</button>
         </div>
         </div>

<div className="container pt-5 mt-5 vh-50 d-flex justify-content-center align-items-center ">
  <div className="card shadow-lg p-4" style={{width: "100%", maxWidth: "500px"}}>
  <h3 className="text-center mb-4">Registration From:</h3>

  <form onSubmit={handleSubmit}>

    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name :</label>
      <input type="text" className="form-control" id="name" name="name"  onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address :</label>
      <textarea className="form-control" id="address" name="address" rows="3"  onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email ID :</label>
      <input type="email" className="form-control" id="email" name="email"  onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="mobile" className="form-label">Mobile No. :</label>
      <input type="tel" className="form-control" id="mobile" name="mobile"  onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="product" className="form-label">Products :</label>
      <select className="form-select" id="product" name="product"  onChange={handleChange}>
        <option value="">Choose a Products...</option>
        <option value="Air Conditioner">Air Conditioner</option>
        <option value="Microwave Oven">Microwave Oven</option>
        <option value="Water Heater">Water Heater</option>
        <option value="Dishwasher">Dishwasher</option>
        <option value="Washing Machine">Washing Machine</option>
        <option value="Kitchen Chimney">Kitchen Chimney</option>
        <option value="Refrigerator">Refrigerator</option>
        <option value="Smart TV">Smart TV</option>
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="issue" className="form-label">Mode of Service :</label>
      <div className="form-check">
        <input type="radio" name="mode" value="Premium" id="premium"
        className="form-check-input"
        checked={formData.mode === "Premium"} onChange={handleChange} />

        <label htmlFor="premium" className="form-check-label">Premium</label>
      </div>
      
      <div>
        <input type="radio" name="mode" value="Normal" id="normal"
        className="form-check-input"
        checked={formData.mode === "Normal"} onChange={handleChange}/>

        <label htmlFor="normal" className="form-check-label">Normal</label>
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="warranty" className="form-label">Warranty :</label>
      <input type="tel" className="form-control" id="war_in_year" name="war_in_year"  onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="notes" className="form-label">Additional Notes:</label>
      <textarea className="form-control" id="notes" name="notes" rows="3"  onChange={handleChange}></textarea>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>

  </div>
</div>

    </>
  );
};
