import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils"

const url='/products';

const allProductsQuery=(queryParam)=>{
const {search,category,company,sort,price,shipping,page}=queryParam;


  return {
    queryKey:[
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 10000,
      shipping ?? false,
      page ?? 1, 
    ],
    queryFn:()=>customFetch(url,{
      params:queryParam
    })
  }
}

export const loader=(queryClient)=> async ({request})=>{

  const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);

  console.log('params : ',params);
  
  const response=await queryClient.ensureQueryData(allProductsQuery(params));

  const products=response.data.data;
  const metaData=response.data.meta;

  return {products,metaData,params};
}


const Products = () => {


  return (
    <div>
       <Filters/>
       <ProductsContainer/>
       <PaginationContainer/>
    </div>
  )
}

export default Products
