import axios from "axios"


const prodUrl='https://strapi-store-server.onrender.com/api'

 export const customFetch=axios.create({
    baseURL:prodUrl
 })


 export const formatPrice=(price)=>{
   const inrAmount=new Intl.NumberFormat('in-IN',{
     style:'currency',
     currency:'INR'
   }).format((price/100).toFixed(2));

   return inrAmount;
 }


 export const generateAmountOptions=(number)=>{

  return Array.from({length:number},(_,index)=>{
    const amount=index + 1;

    return (<option
     value={amount} 
      key={amount}
      >{amount}</option>);
  });
 }