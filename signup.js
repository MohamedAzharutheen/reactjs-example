import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


const myValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'To short!')
        .max(10, 'To Length!')
        .required('Enter Your Name!'),
    email: Yup.string()
        .email('INVALID EMAIL')
        .required('Enter Your Email!'),
    password: Yup.string()
        .min(8, 'password min 8 character')
        .required('Enter Your Password!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'password must match')
        .required('confirm password is required')
});

function signup() {


    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={myValidationSchema}
            onSubmit={values => console.log(values)}
        >
            {
                formikProps => {
                    const { values, errors, touched, setFieldValue, handleSubmit } = formikProps;

                    return (
                        // <Form>
                        //     <div className="h-screen p-5 bg-tahiti">

                        //         <div className="flex flex-col items-center p-5 m-3 rounded md:my-20 md:mx-20 lg:my-20 lg:mx-60 bg-rose">

                        //             <Field className="p-2 m-2 rounded bg-yellow"
                        //                 type="text"
                        //                 placeholder="enter your Name"
                        //                 name="name" />
                        //                  <ErrorMessage  
                        //              component="div" name="name"className="mb-3 text-sm text-red"/>
                        //             <Field className="p-2 m-2 rounded bg-yellow"
                        //                 type="email"
                        //                 placeholder="enter your email"
                        //                 name="email" autoComplete="off" />
                        //                 {/* {errors.email && touched.email ?(<h1 className="text-sm text-black">required field</h1>):null
                        //                 } */}
                        //              <ErrorMessage  
                        //              component="div" name="email"className="text-sm text-red"/>
                        //             <Field className="p-2 m-2 rounded bg-yellow"
                        //                 type="password"
                        //                 placeholder="enter your password"
                        //                 name="password" />
                        //                  <ErrorMessage  
                        //              component="div" name="password"className="text-sm text-red"/>
                        //             <button   className="p-2 mb-2 rounded bg-tahiti"
                        //                 type="submit">submit</button>
                        //             <button onClick={() => setFieldValue("email", "mohamed")} className="p-2 mb-2 rounded bg-tahiti"
                        //                 value="submit">change it</button>
                        //             <button className="p-2 mb-2 rounded bg-tahiti"
                        //                 type="reset">reset</button>

                        //         </div>
                        //     </div>
                        // </Form>



                        <div className='h-screen p-10 '>


                            <div className='p-10 mx-auto my-10 mt-4 bg-purple-200 w-72 rounded-2xl sm:mx-auto sm:w-96 '>
                                <div className='flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mr-2 rounded-full shadow animate-bounce ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <h1 className='mt-4 text-2xl font-bold text-center text-blue-700 underline underline-offset-8 animate-bounce '>Login Form </h1>
                                </div>
                                <Form>
                                    <div className='flex flex-col my-3'>
                                        <label className='mb-3 text-base font-medium '>Name</label>
                                        <Field className='w-full p-1 text-sm rounded outline-none h-9 sm:w-auto' name={"name"}  type={"text"} placeholder={"Enter Your Name"} />
                                        <ErrorMessage  
                                      component="div" name="name"className="text-sm text-red"/>
                                    </div>
                                    <div className='flex flex-col my-3 ' >
                                        <label className='text-base font-medium x'>Email</label>
                                        <Field className='p-1 outline-none sm:w-auto ' name={"email"} type={"email"} placeholder={"Enter Your email"} />
                                        <ErrorMessage  
                                      component="div" name="email"className="text-sm text-red"/>
                                    
                                    </div>
                                    <div className='flex flex-col my-3 ' >
                                        <label className='mb-3 text-base font-medium'>Password</label>
                                        <Field className='p-1 outline-none ' name={"password"}  type={"password"} placeholder={"Enter Your Pssword"} />
                                        <ErrorMessage  
                                      component="div" name="password"className="text-sm text-red"/>
                                    </div>
                                    <div className='flex flex-col my-3 ' >
                                        <label className='mb-3 text-base font-medium'>Password</label>
                                        <Field className='p-1 outline-none ' name={"confirmPassword"} type={"password"} placeholder={"Enter You confirm Password"} />
                                        <ErrorMessage  
                                      component="div" name="confirmPassword"className="text-sm text-red"/>
                                    
                                    </div>
                                    <div className='flex justify-end my-3'>
                                        <Field type={"submit"} className='px-3 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400' />

                                    </div>
                                </Form>



                            </div></div>



                    );
                }}
        </Formik>

    );

}

export default signup