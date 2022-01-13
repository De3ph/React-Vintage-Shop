import { useState } from "react";
import { Redirect } from "react-router-dom";

const BuyinPage = ({cart , setCart}) => {

    let total = 0;

    const [isRedirect , setIsRedirect] = useState(false);

    cart.forEach(element => {
        total += Number(element.itemPrice);
    });

    let handleSubmit = (event)=>{
        event.preventDefault();
        alert("Successfully bought");
        setCart([]);
        setIsRedirect(true);
    }
   
    return ( 

       <form className="row g-3 user-info">

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
           <div className="col-md-6">
               <label for="card" className="form-label">Card Number</label>
               <input className="form-control" id="card" placeholder="0000-0000-0000-0000"/>
           </div>
           <div className="col-md-3">
               <label for="cvc" className="form-label">CVC</label>
               <input className="form-control" id="cvc"/>
           </div>
           <div className="col-md-3">
               <label for="date" className="form-label">Expiration Date</label>
               <input className="form-control" id="date"/>
           </div>
           <p>Total Price: {total}$</p>
           <button onClick={handleSubmit} type="submit" className="btn btn-lg btn-success fs-2 submitButton">Buy</button>

            {true && isRedirect ? <Redirect to="/cart" /> : null}
       </form>
      
     );
}
 
export default BuyinPage;