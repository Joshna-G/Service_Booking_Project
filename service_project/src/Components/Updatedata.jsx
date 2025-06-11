import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

export const Updatedata = () => {
        const {ID} = useParams();
        const navBack = useNavigate();

        const [formUpdate , setFormUpdate] = useState({
        name: "",
        address: "",
        email: "",
        mobile: "",
        product: "",
        mode: "",
        war_in_year: "",
        notes: ""
        });

      //Fetch data by ID
        useEffect(() => {
          axios.get(`http://localhost:8000/read/${ID}`)
          .then((res) => {
              const data = res.data[0];
              setFormUpdate({
                  name: data.Name,
                  address: data.Address,
                  email: data.Email,
                  mobile: data.Mobile,
                  product: data.Product,
                  mode: data.Mode_ser,
                  war_in_year: data.War_in_year,
                  notes: data.Add_note,
              });
          })
          .catch((err) => console.error("Error fetching data:", err));
  }, [ID]);

      //Handle form submission
        const handleUpdate = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/Updatedata/ ${ID}`, formUpdate)
            .then(res => {
                navBack('/Datas')
                res.data()
            })
            .catch(err => console.log(err))
        };

        
    //handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormUpdate({...formUpdate, [name]: value});   //data redirecting ...formData
      };

  return (
    <>
    <div className="container pt-5 mt-5 vh-50 d-flex justify-content-center align-items-center ">
  <div className="card shadow-lg p-4" style={{width: "100%", maxWidth: "500px"}}>
  <h3 className="text-center mb-4">Update From:</h3>

  <form onSubmit={handleUpdate}>

    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name :</label>
      <input type="text" className="form-control" id="name" name="name" value={formUpdate.name}  onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address :</label>
      <textarea className="form-control" id="address" name="address" rows="3" value={formUpdate.address} onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email ID :</label>
      <input type="email" className="form-control" id="email" name="email" value={formUpdate.email} onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="mobile" className="form-label">Mobile No. :</label>
      <input type="tel" className="form-control" id="mobile" name="mobile" value={formUpdate.mobile} onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="product" className="form-label">Products :</label>
      <select className="form-select" id="product" name="product"  onChange={handleChange}>
        <option value="">Choose a Products...</option>
        <option value="Air Conditioner">Air Conditioner</option>
        <option value="Microwave oven">Microwave Oven</option>
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
        checked={formUpdate.mode === "Premium"} onChange={handleChange} />

        <label htmlFor="premium" className="form-check-label">Premium</label>
      </div>
      
      <div>
        <input type="radio" name="mode" value="Normal" id="normal"
        className="form-check-input"
        checked={formUpdate.mode === "Normal"} onChange={handleChange}/>

        <label htmlFor="normal" className="form-check-label">Normal</label>
      </div>
    </div>

    
    <div className="mb-3">
      <label htmlFor="warranty" className="form-label">Warranty :</label>
      <input type="tel" className="form-control" id="war_in_year" name="war_in_year" value={formUpdate.war_in_year} onChange={handleChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="notes" className="form-label">Additional Notes:</label>
      <textarea className="form-control" id="notes" name="notes" rows="3" value={formUpdate.notes} onChange={handleChange}></textarea>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">Update</button>
    </div>
  </form>

  </div>
</div>

    </>
  )
}
