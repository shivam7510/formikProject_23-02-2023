import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { v4 as uuid } from "uuid";
import * as yup from "yup";
import Error from "../Error";

const validateSchema = yup.object({
  name: yup.string().required("Name is required !"),
  dob: yup.date().required("DOB is required !"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address !"
    )
    .required("Email is required !"),
  phone: yup
    .number()
    .min(1000000000, "Not valid phone number !")
    .max(9999999999, "Not valid phone number !")
    .required("Phone number is required !"),
  hobbies: yup
    .array()
    .min(1, "Enter at least one hobby !")
    .max(3, "Maximum 3 hobbies can be added !"),
});

const Content1 = ({ setInfo }) => {
  return (
    <>
      <div className="border border-indigo-700 w-11/12 p-3">
        <Formik
          initialValues={{
            id: "",
            name: "",
            dob: "",
            email: "",
            phone: "",

            hobbies: [],
          }}
          validationSchema={validateSchema}
          onSubmit={(values, { resetForm }) => {
            setInfo((prevInfo) => [...prevInfo, { ...values, id: uuid() }]);
            resetForm();
          }}
        >
          {({ values }) => {
            console.log(values);
            return (
              <>
                <Form>
                  <div className="flex flex-col">
                    <div className="flex flex-col border-b border-black">
                      <div className="flex items-center">
                        <div className="w-1/2 flex">
                          <label className="pb-3">Name: </label>
                        </div>
                        <div className="pl-2 border-l border-black">
                          <Field
                            name="name"
                            type="text"
                            placeholder="Your name here..."
                            className="border p-1"
                          />
                          <Error Name="name" />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-1/2 flex">
                          <label className="pb-3">DOB: </label>
                        </div>
                        <div className="pl-2 border-l border-black">
                          <Field name="dob" type="date" className="border" />
                          <Error Name="dob" />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-1/2 flex">
                          <label className="pb-3">Email: </label>
                        </div>
                        <div className="pl-2 border-l border-black">
                          <Field
                            name="email"
                            type="email"
                            placeholder="Your Email here..."
                            className="border p-1"
                          />
                          <Error Name="email" />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-1/2 flex">
                          <label className="pb-3">Phone: </label>
                        </div>
                        <div className="pl-2 border-l border-black">
                          <Field
                            name="phone"
                            type="number"
                            placeholder="Your phone no here..."
                            className="border p-1"
                          />
                          <Error Name="phone" />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-1/2 flex">
                          <label className="pb-3">Hobby: </label>
                        </div>
                        <div className="pl-2 border-l border-black">
                          <FieldArray
                            name="hobbies"
                            render={(arrayHelpers) => (
                              <div>
                                {values.hobbies && values.hobbies.length > 0 ? (
                                  values.hobbies.map((hobby, index) => (
                                    <div
                                      key={index}
                                      className="space-x-2 space-y-1.5"
                                    >
                                      <Field
                                        name={`hobbies.${index}`}
                                        className="border w-28"
                                      />
                                      <button
                                        className="bg-red-400 px-2 hover:bg-red-600"
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        } // remove a friend from the list
                                      >
                                        -
                                      </button>
                                      <button
                                        type="button"
                                        className="bg-blue-400 px-2 hover:bg-blue-600"
                                        onClick={() => {
                                          arrayHelpers.insert(index, "");
                                        }} // insert an empty string at a position
                                      >
                                        +
                                      </button>
                                    </div>
                                  ))
                                ) : (
                                  <>
                                    <button
                                      className="border border-black px-4 hover:bg-gray-100"
                                      type="button"
                                      onClick={() => arrayHelpers.push("")}
                                    >
                                      {/* show this when user has removed all hobbies from the list */}
                                      Add a hobby
                                    </button>
                                  </>
                                )}
                              </div>
                            )}
                          />
                          <Error Name="hobbies" />
                        </div>
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

export default Content1;
