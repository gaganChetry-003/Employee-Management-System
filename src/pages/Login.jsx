import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col justify-center  h-screen items-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>

            <h2 className='font-pacific text-3xl text-white'>Employee Management System</h2>
            <div className='border shadow p-6 w-80 bg-white'>
                <h2 className='text-xl font-semibold text-center'>Login</h2>
                <form >

                    <div className='mb-4'>

                        <label htmlFor="email" className='  block text-gradient-600'>Email</label>
                        <input type="email" className='w-full px-3 py-2 border' placeholder='Enter Email' />
                    </div>
                    <div className='mb-4'>

                        <label htmlFor="password" className='block text-black'>Password</label>
                        <input type="password" className='w-full px-3 py-2 border' placeholder='*******' />
                    </div>

                    <div className='flex items-center  justify-between '>
                        <label className='inline-flex items-center space-x-1'>
                            <input type="checkbox" className='form-checkbox' />
                            <span>Remember me</span>
                        </label>
                        <a href='#' className='text-teal-600'>
                            Forgot Password
                        </a>
                    </div>
                    <div className='mt-4'> <button type='submit' className='w-full bg-teal-600 text-whit py-2'>Login</button></div>



                </form>
            </div>

        </div>
    )
}

export default Login
