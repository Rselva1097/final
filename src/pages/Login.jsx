import { Form, Link } from "react-router-dom"
import { FormInput, SubmitBtn } from "../components"
import Register from './Register';


const Login = () => {
  return (
   <section className="h-screen grid place-items-center">

    <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" method="post">
      <h4 className="text-center text-3xl font-bold"> Login</h4>
      <FormInput 
       type="email"
       label="email"
       name="email" 
       defaultValue="test@test.com"></FormInput>
      <FormInput
       name="password" 
       label="password"
       type="password"
      defaultValue="secret"></FormInput>

      <div className="mt-4">
      <SubmitBtn text="login"></SubmitBtn>
      </div>
      <button type="button" className="btn btn-secondary block">guest user</button>
      <p className="text-center">
        Not a member yet ?
        <Link to='/register' className="ml-2 link link-hover link-primary capitalize">Register</Link>
      </p>
    </Form>

   </section>
  )
}

export default Login
