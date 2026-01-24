import { FeaturedProduct,Hero } from "../components";

import {customFetch} from '../utils'

const url='/products?featured=true'

const featuredProductQuery={
  queryKey:['featured-products'],
  queryFn:()=>customFetch(url)
}

export const loader=(queryClient) => async ()=>{
  const response=await queryClient.fetchQuery(featuredProductQuery)
  const products=response.data.data;
  console.log(products)

  return {products};
}

const Landing = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProduct/>
    </div>

  )
}

export default Landing
