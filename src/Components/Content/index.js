import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from 'yup'
import Error from "../Error";

const validateSchema = yup.object({
  name: yup.string().required()
})

const Content = () => {
  return (
    <>
      <div className="border border-indigo-700 w-5/12 p-3">
        <Formik
          initialValues={{
            name: "",
            dob: "",
            contact: {
              email: "",
              phone: "",
            },

            hobbies: [],
          }}

          validationSchema={validateSchema}

          onSubmit={(values) => console.log(values)}
        >
          {({ values }) => {
            return (
              <>
                <Form>
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="w-1/2 flex flex-col  border-r border-black border-b border-black py-2">
                        <label className="pb-3">Name: </label>
                        <label className="pb-3">DOB: </label>
                        <label className="pb-3">Email: </label>
                        <label className="pb-3">Phone: </label>
                        <label className="pb-3">Hobby: </label>
                      </div>
                      <div className="w-1/2 pl-2 border-b border-black space-y-2.5 py-2">
                        <Field
                          name="name"
                          type="text"
                          placeholder="Your name here..."
                        />
                        <Error Name="name"/>
                        <Field name="dob" type="date" />
                        <Field
                          name="email"
                          type="email"
                          placeholder="Your email here..."
                        />
                        <Field
                          name="phone"
                          type="number"
                          placeholder="Your phone here..."
                        />
                        <FieldArray
                          name="hobbies"
                          render={(arrayHelpers) => (
                            <div>
                              {values.hobbies && values.hobbies.length > 0 ? (
                                values.hobbies.map((hobby, index) => (
                                  <div key={index} className="space-x-2 space-y-1.5">
                                    <Field name={`hobbies.${index}`} className="border"/>
                                    <button
                                      className="bg-red-400 px-2 hover:bg-red-600"
                                      type="button"
                                      onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                    >
                                      -
                                    </button>
                                    <button
                                      type="button"
                                      className="bg-blue-400 px-2 hover:bg-blue-600"
                                      onClick={() =>
                                        arrayHelpers.insert(index, "")
                                      } // insert an empty string at a position
                                    >
                                      +
                                    </button>
                                  </div>
                                ))
                              ) : (
                                <button
                                  className="border border-black px-4 hover:bg-gray-100"
                                  type="button"
                                  onClick={() => arrayHelpers.push("")}
                                >
                                  {/* show this when user has removed all hobbies from the list */}
                                  Add a hobby
                                </button>
                              )}
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <button
                        type="submit"
                        className="bg-green-700 px-3 py-2 font-bold rounded-full hover:bg-green-500"
                      >
                        Submit now
                      </button>
                    </div>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Content;
