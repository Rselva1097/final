import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {

  const {metaData,params}=useLoaderData();

  const {search,category,company,order,price,shipping}=params;

  

  return (
   <Form className='bg-base-200 rounded-md px-8 py-8 grid gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
    <FormInput 
    label='search product'
    name='search'
    type='search'
    defaultValue={search}
    size='input-sm'
    ></FormInput>
    <FormSelect
    label='search category'
    name='category'
    list={metaData?.categories || []}
    defaultValue={category}
    size='select-sm'
    ></FormSelect>
    <FormSelect
    label='search company'
    name='company'
    list={metaData?.companies || []}
    defaultValue={company}
    size='select-sm'
    ></FormSelect>
      <FormSelect
    label='sort by'
    name='order'
    list={['a-z','z-a','high','low']}
    defaultValue={order}
    size='select-sm'
    ></FormSelect>
    <FormRange
     label='price range'
      name='price'
      price={price}
       size='range-sm'>
    </FormRange>
    <FormCheckbox 
     label='free shipping' 
     name='shipping'
     defaultValue={shipping}
      size='checkbox-sm'>
    </FormCheckbox>
    <button 
    type='submit' 
    className='btn btn-primary btn-sm'
    >search
    </button>
    <Link 
    to='/products'
    className='btn btn-accent btn-sm'
    >
        reset
    </Link>
   </Form>
  )
}

export default Filters
