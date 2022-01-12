import { useEffect } from "react";
import { Link } from "react-router-dom";

const BuyinPage = ({cart}) => {

    let total = 0;

    cart.forEach(element => {
        total += Number(element.itemPrice);
    });
   
    return ( 
       <div className="row g-3 user-info">
           <div className="col-md-6">
               <label for="name" className="form-label">Name</label>
               <input className="form-control" id = "name" />
           </div>
           <div className="col-md-6">
               <label for="surname" className="form-label">Surname</label>
               <input className="form-control" id = "surname" />
           </div>
           <div className="col-md-12">
               <label for="inputEmail4" className="form-label">Email</label>
               <input  className="form-control" id = "inputEmail4" />
           </div>
           <div className="col-md-12">
               <label for="address" className="form-label">Address</label>
               <input className="form-control" id="address" />
           </div>
           <div className="col-md-12">
               <label for="card" className="form-label">Card Number</label>
               <input className="form-control" id="card" placeholder="0000-0000-0000-0000"/>
           </div>
           <p>Total Price: {total}$</p>
           <button className="btn btn-lg btn-success fs-2">Buy</button>

       </div>
      
     );
}
 
export default BuyinPage;