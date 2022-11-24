import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import Navbar from "../../Sharred/Navar/Navbar";

const Register = () => {
  //react hook from
  const { register,handleSubmit,formState: { errors }} = useForm();
const[sinuperor,setSinupero]=useState("")

//context api
const  {creatUser}=useContext(AuthContext)

  const handleSingup = (data) => {
    console.log(data);
  //user-create 
  creatUser(data.email,data.password)
  .then((result)=>{
    const  user =result.user;
    console.log(user);
    setSinupero("")

  }).catch(error => {
    console.log(error.message)
    setSinupero(error.message);
});
  
  



  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

        <p className="text-primary text-xl">{sinuperor}</p>
        <form onSubmit={handleSubmit(handleSingup)}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                {...register("name", {
                  required: "name address is required"
                })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />

              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                required
                {...register("email", {
                  required: "eamil address is required"
                })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />

              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                {...register("password", {
                  required: "passwor is requered",
                  minLength: {
                    value: 6,
                    message: "passwor must be at least 6 characters"
                  }
                })}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">register</button>
            </div>
            <p>
              have a acount{" "}
              <Link className="text-red-900  text-2xl" to="/login">
                login
              </Link>
            </p>
          </div>

           <div className="flex flex-col">
            <button className="bg-prymary">google</button>
            <button className="bg-prymary">github</button>
            <button className="bg-purple-700">facebook </button>

           </div>



        </form>
      </div>
    </div>
  );
};

export default Register;
