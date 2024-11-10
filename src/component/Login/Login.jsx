import Style from '../Login/Login.module.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";






export default function Login(){

    function loginSubmit(){
        console.log("success");
        
    }

    
    let passwordRegex=/^[A-Z][a-z0-9]{5,10}$/;
    let validate = yup.object({
        email:yup.string().email("Email is valid").required("Email is required"),
        password:yup.string().matches(passwordRegex,"password is valid").required("password is required"),
    })



    let data = useFormik({
        initialValues:{
            
            email:"",
            password:"",
        },validationSchema:validate,onSubmit:loginSubmit
    })



    return <>
        <div className="row mx-auto w-75 ">
            <h2 className='py-3'>Login Now</h2>
            <form onSubmit={data.handleSubmit} >
    
                    
                <label htmlFor="email" className='mb-2'>Email:</label>
                <input className='form-control mb-2' value={data.values.email} onBlur={data.handleBlur} onChange={data.handleChange} type="text" id='email' name='email' />
                {data.errors.email && data.touched.email?<div className="alert alert-danger">{data.errors.email}</div>:null}
                
                <label htmlFor="password"className='mb-2'>Password:</label>
                <input className='form-control mb-2' value={data.values.password} onBlur={data.handleBlur} onChange={data.handleChange} type="password" id='password' name='password' />
                {data.errors.password && data.touched.password?<div className="alert alert-danger">{data.errors.password}</div>:null}
                

               <button disabled={!(data.isValid &&data.dirty) } type='submit' className='btn btn-info mt-2'>Login</button>


                    
                    
                    
                
            </form>

        </div>
    </>
}