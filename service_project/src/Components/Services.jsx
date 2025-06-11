import { Link } from "react-router-dom";
import logo from '../Media_img/service-logopng-img.png';
import product1 from '../Media_img/product1.jpg';
import product2 from '../Media_img/product2.jpg';
import product3 from '../Media_img/product3.jpg';
import product4 from '../Media_img/product4.jpg';
import product5 from '../Media_img/product5.jpg';
import product6 from '../Media_img/product6.jpg';
import product7 from '../Media_img/product7.jpg';
import product8 from '../Media_img/product8.jpg';

export const Services = () => {
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

        <div className="mt-5">
         <div className="container d-flex flex-wrap justify-content-between">
               <div className="p-2">
                 <img src={product1} alt="product1" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
               <div className="p-2">
                 <img src={product2} alt="product2" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
               <div className="p-2">
                 <img src={product3} alt="product3" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
               <div className="p-2">
                 <img src={product4} alt="product4" className="img-fluid rounded-pill shadow-sm" style={{width: '200px',height: '220px' ,borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
              </div>
              <div className="container d-flex flex-wrap justify-content-between">
               <div className="p-2">
                 <img src={product5} alt="product5" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
               <div className="p-2">
                 <img src={product6} alt="product6" className="img-fluid rounded-pill shadow-sm" style={{width: '200px', borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
               <div className="p-2">
                 <img src={product7} alt="product7" className="img-fluid rounded-pill shadow-sm" style={{width: '200px',height: '220px' ,borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
               <div className="p-2">
                 <img src={product8} alt="product8" className="img-fluid rounded-pill shadow-sm" style={{width: '200px',borderRadius: '1px'}}/>
                 <p>Lorem ipsum, dolor sit amet consectetur <br/>adipisicing elit. Quod vel perspiciatis <br/>amet corrupti fugit<br/> consequuntur reiciendis velit fugiat <br/>soluta aspernatur?</p>
               </div>
              </div>
              </div>
    </>
  )
}
