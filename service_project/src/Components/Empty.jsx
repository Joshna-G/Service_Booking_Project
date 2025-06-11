import { Link, useNavigate } from "react-router-dom";
import logo from '../Media_img/service-logopng-img.png'


export const Empty = () => {
  const navigate = useNavigate();

  
  const handleBooking = () => {
    navigate("/Registration")
  }
  return (
    <>
      <div className="container-fluid bg-info p-2 w-100 shadow-lg rounded">
     <div className="d-flex justify-content-between align-items-center ms-5">
        <img className="img-fluid logo_img" src={logo}/>
     <Link className="link-dark me-3 text-decoration-none h5" to='/'>Home</Link>
     <Link className="link-dark me-3 text-decoration-none h5" to='/About'>About</Link>
     <Link className="link-dark me-3 text-decoration-none h5" to='/Services'>Services</Link>
     <Link className="link-dark me-3 text-decoration-none h5" to='/Registration'>Registration</Link>
     <Link className="link-dark me-3 text-decoration-none h5" to='/Datas'>Data's</Link>
     <button className="h5 btn btn-secondary text-white btn-outline-dark p-2">+91 988 8989 909</button>
     </div>
     </div>
     <div className="container mt-5">
     <marquee className="h1 mb-5">Home Appliances Services</marquee>
     <br/>
     <h3 className="display-1">Joe's Company</h3>
     <br/>
     <p >
     Home appliances play a vital role in our daily lives, ensuring comfort, convenience, and efficiency. 
     Our home appliance service specializes in the repair, maintenance, and installation of a wide range of devices, including refrigerators, washing machines, air conditioners, and more. 
     With a team of trained professionals, we are committed to providing prompt and reliable solutions to extend the lifespan of your appliances and enhance their performance. 
     Whether it's a minor issue or a major breakdown, we use state-of-the-art tools and techniques to restore your appliances to optimal working condition. 
     Trust us to keep your home running smoothly.
     </p>
     <br/>
     <button className="btn btn-secondary text-white btn-outline-dark p-2  h5 rounded align-item-center" onClick={handleBooking}>Book Now!</button>
     </div>
    </>
  )
}
