import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { CartItemsList, CartTotal, SectionTitle } from "../components";

 
const Cart = () => {
const user=null;

  return <>
  <SectionTitle text='your cart'/>
  <div className="mt-8 grid gap-8 lg:grid-cols-12 ">
   <div className="lg:col-span-8">
      <CartItemsList/>
   </div>
   <div className="lg:col-span-4 lg:pl-4">
     <CartTotal/>
    {
      user ? (
        <Link 
        className="btn btn-primary mt-8 btn-block"
        to={`/checkout`}
        >
           proceed to checkout        
        </Link>
      ) :(
          <Link 
          className="btn btn-primary mt-8 btn-block"
          to={`/login`}
          >
           login to checkout
          </Link>
      )
    }
   </div>
  </div>
  <Outlet/>
  </>
};
export default Cart;
