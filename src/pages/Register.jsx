import { Form, Link, Outlet } from "react-router-dom"
import { FormInput, SubmitBtn } from "../components"


const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
     <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" method="post">
      <h4 className="text-center text-3xl font-bold">Register</h4>
      <FormInput 
       type="text"
       label="username"
       name="username" 
       ></FormInput>
      <FormInput 
       type="email"
       label="email"
       name="email" 
       ></FormInput>
      <FormInput
       name="password" 
       label="password"
       type="password"
      ></FormInput>

      <div className="mt-4">
        <SubmitBtn text="Register"></SubmitBtn>
      </div>
       <p className="text-center">
        Already a member ?
        <Link to='/login' className="ml-2 link link-hover link-primary capitalize">login</Link>
      </p>
     </Form>
    </section>
  )
}

export default Register
