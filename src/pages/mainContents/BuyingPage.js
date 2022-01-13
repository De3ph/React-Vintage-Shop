import { useState } from "react";
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';

const BuyinPage = ({cart , setCart}) => {

    let total = 0;

    const [isRedirect , setIsRedirect] = useState(false);

    cart.forEach(element => {
        total += Number(element.itemPrice);
    });

    let handleSubmit = (event)=>{
        event.preventDefault();
        swal("Successfully bought!","", "success");
        setCart([]);
        setIsRedirect(true);
    }
   
    return ( 

       <form className="row g-3 user-info">

           <div className="col-lg-6 col-md-6 ">
               <label for="name" className="form-label fs-5">Name</label>
               <input className="form-control" id = "name" />
           </div>
           <div className="col-lg-6 col-md-6">
               <label for="surname" className="form-label fs-5">Surname</label>
               <input className="form-control" id = "surname" />
           </div>
           <div className="col-md-12">
               <label for="inputEmail4" className="form-label fs-5">Email</label>
               <input  className="form-control" id = "inputEmail4" />
           </div>
           <div className="col-md-12">
               <label for="address" className="form-label fs-5">Address</label>
               <input className="form-control" id="address" />
           </div>
           <div className="col-md-6">
               <label for="card" className="form-label fs-5">Card Number</label>
               <input className="form-control" id="card" placeholder="0000-0000-0000-0000"/>
           </div>
           <div className="col-md-3">
               <label for="cvc" className="form-label fs-5">CVC</label>
               <input className="form-control" id="cvc" placeholder="000"/>
           </div>
           <div className="col-md-3">
               <label for="date" className="form-label fs-5">Expiration Date</label>
               <input className="form-control" id="date" placeholder="00/00"/>
           </div>
           <p>Total Price: {total}$</p>
           <button onClick={handleSubmit} type="submit" className="btn btn-lg btn-warning fs-2">Buy</button>

            {true && isRedirect ? <Redirect to="/cart" /> : null}
       </form>
      
     );
}
 
export default BuyinPage;