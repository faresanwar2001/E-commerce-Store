import Style from '../Register/Register.module.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";





export default function Register(){
   

    async function registerSubmit(values){
        console.log("successfully");

    }

    let phoneRegex=/(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    let passwordRegex=/^[A-Z][a-z0-9]{5,10}$/;
    let validate = yup.object({
        name:yup.string().min(3,"Name must be at least 3 characters long").max(12,"Name must be at least 12 characters long").required("Name is required"),
        email:yup.string().email("Email is valid").required("Email is required"),
        phone:yup.string().matches(phoneRegex,"Phone is valid").required("Phone is required"),
        password:yup.string().matches(passwordRegex,"password is valid").required("password is required"),
        rePassword:yup.string().oneOf([yup.ref("password")],"password and rePassword Not Matched").required("password is required"),
    })



    let data = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:"",
            phone:"",
        },validationSchema:validate,onSubmit:registerSubmit
    })



    return <>
        <div className="row mx-auto w-75 ">
            <h2 className='py-3'>Register Now</h2>
            <form onSubmit={data.handleSubmit} >
                <label htmlFor="name" className='mb-2'>Name:</label>
                <input className='form-control mb-2' value={data.values.name} onBlur={data.handleBlur} onChange={data.handleChange} type="text" id='name' name='name' />
                {data.errors.name && data.touched.name?<div className="alert alert-danger">{data.errors.name}</div>:null}
                    
                <label htmlFor="email" className='mb-2'>Email:</label>
                <input className='form-control mb-2' value={data.values.email} onBlur={data.handleBlur} onChange={data.handleChange} type="text" id='email' name='email' />
                {data.errors.email && data.touched.email?<div className="alert alert-danger">{data.errors.email}</div>:null}
                <label htmlFor="phone"className='mb-2'>Phone:</label>
                <input className='form-control mb-2' value={data.values.phone} onBlur={data.handleBlur} onChange={data.handleChange} type="tel" id='phone' name='phone' />
                {data.errors.phone && data.touched.phone?<div className="alert alert-danger">{data.errors.phone}</div>:null}
                <label htmlFor="password"className='mb-2'>Password:</label>
                <input className='form-control mb-2' value={data.values.password} onBlur={data.handleBlur} onChange={data.handleChange} type="password" id='password' name='password' />
                {data.errors.password && data.touched.password?<div className="alert alert-danger">{data.errors.password}</div>:null}
                <label htmlFor="rePassword"className='mb-2'>Re-Password:</label>
                <input className='form-control mb-2' value={data.values.rePassword} onBlur={data.handleBlur} onChange={data.handleChange} type="password" id='rePassword' name='rePassword' />
                {data.errors.rePassword && data.touched.rePassword?<div className="alert alert-danger">{data.errors.rePassword}</div>:null}
                <button disabled={!(data.isValid &&data.dirty) } type='submit' className='btn btn-info mt-2'>Register</button>
            </form>

        </div>
    </>
}