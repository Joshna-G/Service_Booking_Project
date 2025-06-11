import { Link } from "react-router-dom";
import logo from '../Media_img/service-logopng-img.png';
import { useState } from "react";

export const Login_Info = () => {

const [loginData, setLoginData] = useState({
  name: "",
  email: "",
  password: "",
});

const handleChange = (e) => {
  const {name, value} = e.target;
  setLoginData ({...loginData, [name]: value});  //update the corresponding field in 'loginData' 
};

const handleSubmit = (e) =>{
  e.preventDefault();  //prevent page reload
  console.log("login successfully:", loginData);

  //reset the form fields by setting formData back to the initial state 
  setLoginData ({
    name: "",
    email: "",
    password: "",
  });

}

  return (
    <>
    <div className="container-fluid bg-info p-2 w-100 shadow-lg rounded">
        <div className="d-flex justify-content-between align-items-center ms-5">
           <img className="img-fluid logo_img" src={logo}/>
        <Link className="link-dark me-3 text-decoration-none h5" to='/Home'>Home</Link>
        <Link className="link-dark me-3 text-decoration-none h5" to='/About'>About</Link>
        <Link className="link-dark me-3 text-decoration-none h5" to='/Services'>Services</Link>
        <Link className="link-dark me-3 text-decoration-none h5" to='/Registration'>Registration</Link>
        <Link className="link-dark me-3 text-decoration-none h5" to='/Login_Info'>Login</Link>
        <button className="h5 btn btn-secondary text-white btn-outline-dark p-2">+91 988 8989 909</button>
        </div>
        </div>

        <div className="container pt-5 mt-5 vh-50 d-flex justify-content-center align-items-center ">
          <div className="card shadow-lg p-4" style={{width: "100%", maxWidth: "500px"}}>
          <h3 className="text-center mb-4">Login Form..</h3>
          <form onSubmit={handleSubmit}>
            
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name :</label>
      <input type="text" className="form-control" id="name" name="name" value={loginData.name} onChange={handleChange} />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email ID :</label>
      <input type="email" className="form-control" id="email" name="email" value={loginData.email} onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password :</label>
      <input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleChange} />
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">Sign In</button>
    </div>
          </form>
          </div>
        </div>
    </>
  )
}
