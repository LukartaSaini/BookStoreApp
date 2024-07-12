import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div  className=" bg-white p-8 rounded-md shadow-lg w-[400px] max-w-md">
      <button className="text-black ml-[333px] "> <Link to="/">  ✕ </Link>  </button>

        <h2 className="text-2xl font-bold  text-center">Sign Up</h2>
        <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              {...register("email", { required: true })}

            />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}

           />
           <br />
           {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

<br />

          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <p>Already have account? <button className='text-blue-500 underline'  onClick={()=>document.getElementById("my_modal_3").showModal() }>Login</button> 
            <Login />
          </p>
          </div>
        </form>
      </div>
    </div>

      

    </>
  )
}

export default Signup