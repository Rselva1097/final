import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CartItemsList, CartTotals, SectionTitle } from "../components";

 
const Cart = () => {
const user=null;

  return <>
  <SectionTitle text='your cart'/>
  <div className="mt-8 grid gap-8 lg:grid-cols-12 ">
   <div className="lg:col-span-8">
      <CartItemsList/>
   </div>
  </div>
  <CartTotals/>
  <Outlet/>
  </>
};
export default Cart;
