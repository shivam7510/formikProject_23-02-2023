import React from 'react'
import { ErrorMessage } from 'formik'

const Error = ({ Name }) => {
  return (
    <>
        <div className='text-red-800 text-sm'>
            <ErrorMessage name={Name} />
        </div>
    </>
  )
}

export default Error
