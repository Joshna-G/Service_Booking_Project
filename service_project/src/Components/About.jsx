import { Link } from "react-router-dom";
import logo from '../Media_img/service-logopng-img.png';
import serImg1 from '../Media_img/ser-img1.jpg';
import serImg2 from '../Media_img/ser-img2.jpg';
import serImg3 from '../Media_img/ser-img3.jpg';
import serImg4 from '../Media_img/ser-img4.jpg';
import serImg5 from '../Media_img/ser-img5.jpg';
import serImg6 from '../Media_img/ser-img6.jpg';
import offer1 from '../Media_img/off-1.jpg';
import offer2 from '../Media_img/off-2.jpg';
import customer1 from '../Media_img/cus-1.jpg';
import customer2 from '../Media_img/cus-2.jpg';
import customer3 from '../Media_img/cus-3.jpg';
import customer4 from '../Media_img/cus-4.jpg';


export const About = () => {
  return (
    <>
     <div className="container-fluid bg-info p-2 w-100 shadow-lg rounded">
         <div className="d-flex justify-content-between align-items-center ms-5">
            <img className="img-fluid logo_img" src={logo}/>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Home'>Home</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/About'>About</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Services'>Services</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Registration'>Registration</Link>
         <Link className="link-dark me-3 text-decoration-none h5" to='/Datas'>Data's</Link>
         <button className="h5 btn btn-secondary text-white btn-outline-dark p-2">+91 988 8989 909</button>
         </div>
         </div>

         <h1 className="mt-5 ms-4 display-1">Joe's Company</h1>
         <br/>
         <p className="ms-4">  Home appliances play a vital role in our daily lives, ensuring comfort, convenience, and efficiency. 
     Our home appliance service specializes in the repair, maintenance, and installation of a wide range of devices, including refrigerators, washing machines, air conditioners, and more. 
     With a team of trained professionals, we are committed to providing prompt and reliable solutions to extend the lifespan of your appliances and enhance their performance. 
     Whether it's a minor issue or a major breakdown, we use state-of-the-art tools and techniques to restore your appliances to optimal working condition. 
     Trust us to keep your home running smoothly.</p>
     <br/>

     <div className="container d-flex flex-wrap justify-content-between">
      <div className="p-2">
        <img src={serImg1} className="img-fluid rounded shadow-sm" alt="service1" style={{width: '300px', borderRadius: '1px'}}/>
      </div>
      <div className="p-2">
        <img src={serImg2} className="img-fluid rounded shadow-sm" alt="service2" style={{width: '300px', borderRadius: '1px'}}/>
      </div>
      <div className="p-2">
        <img src={serImg3} className="img-fluid rounded shadow-sm" alt="service3" style={{width: '300px', borderRadius: '1px'}}/>
      </div>
     </div>

     <br/>
         <p className="ms-4">  Home appliances play a vital role in our daily lives, ensuring comfort, convenience, and efficiency. 
     Our home appliance service specializes in the repair, maintenance, and installation of a wide range of devices, including refrigerators, washing machines, air conditioners, and more. 
     With a team of trained professionals, we are committed to providing prompt and reliable solutions to extend the lifespan of your appliances and enhance their performance. 
     Whether it's a minor issue or a major breakdown, we use state-of-the-art tools and techniques to restore your appliances to optimal working condition. 
     Trust us to keep your home running smoothly.</p>
     <br/>

     
     <div className="container d-flex flex-wrap justify-content-between">
      <div className="p-2">
        <img src={serImg4} className="img-fluid rounded shadow-sm" alt="service4" style={{width: '300px', borderRadius: '1px'}}/>
      </div>
      <div className="p-2">
        <img src={serImg5} className="img-fluid rounded shadow-sm" alt="service5" style={{width: '300px', borderRadius: '1px'}}/>
      </div>
      <div className="p-2">
        <img src={serImg6} className="img-fluid rounded shadow-sm" alt="service6" style={{width: '300px', borderRadius: '1px'}}/>
      </div>
     </div>
     
     <br/>
         <p className="ms-4">  Home appliances play a vital role in our daily lives, ensuring comfort, convenience, and efficiency. 
     Our home appliance service specializes in the repair, maintenance, and installation of a wide range of devices, including refrigerators, washing machines, air conditioners, and more. 
     With a team of trained professionals, we are committed to providing prompt and reliable solutions to extend the lifespan of your appliances and enhance their performance. 
     Whether it's a minor issue or a major breakdown, we use state-of-the-art tools and techniques to restore your appliances to optimal working condition. 
     Trust us to keep your home running smoothly.</p>
     <br/>

     <div className="container d-flex flex-wrap justify-content-between">
      <div className="p-2">
        <img src={offer1} className="img-fluid rounded shadow-sm" alt="service4" style={{width: '600px',height: '250px', borderRadius: '1px'}}/>
      </div>
      <div className="p-2">
        <img src={offer2} className="img-fluid rounded shadow-sm" alt="service6" style={{width: '600px',height: '250px', borderRadius: '1px'}}/>
      </div>
     </div>

     <br/>
         <p className="ms-4">  Home appliances play a vital role in our daily lives, ensuring comfort, convenience, and efficiency. 
     Our home appliance service specializes in the repair, maintenance, and installation of a wide range of devices, including refrigerators, washing machines, air conditioners, and more. 
     With a team of trained professionals, we are committed to providing prompt and reliable solutions to extend the lifespan of your appliances and enhance their performance. 
     Whether it's a minor issue or a major breakdown, we use state-of-the-art tools and techniques to restore your appliances to optimal working condition. 
     Trust us to keep your home running smoothly.</p>
     <br/>

     <h2 className="mt-2 ms-4">Reviews...</h2>
     <div className="container d-flex flex-wrap justify-content-between">
      <div className="p-2">
        <img src={customer1} alt="customer1" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
        <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
      </div>
      <div className="p-2">
        <img src={customer2} alt="customer2" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
        <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
      </div>
      <div className="p-2">
        <img src={customer3} alt="customer3" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
        <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
      </div>
      <div className="p-2">
        <img src={customer4} alt="customer4" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
        <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
      </div>
     </div>
    </>
  )
}
