import React, { useEffect } from "react";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Formik, Field, Form } from "formik";

const Table = ({ info, setInfo }) => {
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const handleEditValues = (userData) => {
    setUserDetails(userData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const delHandler = (id) => {
    const newInfo = info.filter((element) => element.id != id);
    setInfo(newInfo);
  };

  console.log(info);

  const handleUpdate = (data) => {
    const newData = info.map((el) => {
      if (el.id == userDetails.id) {
        el.name = data.name;
        el.dob = data.dob;
        el.phone = data.phone;
        el.email = data.email;
        el.hobbies = data.hobbies;
      }
      return el;
    });
    console.log(newData);
    setInfo(newData);

    // const newData = info.map((element) => {
    //   console.log("userDetails",userDetails);
    //   console.log("element",element);
    //   console.log("data",data);

    //   if (element.id == userDetails.id) {
    //     console.log("inside if --",element);
    //     const data = [...element, ...data];
    //     console.log("data", data);
    //     return data;
    //   }
    //   console.log(newData);
    //   setInfo([...info, newData]);
    // });
  };

  return (
    <>
      <div>
        <table className="table-auto">
          <thead>
            <tr className="border-b border-red-900">
              <th className="w-12">Sr.no</th>
              <th className="w-28">Name</th>
              <th className="w-24">DOB</th>
              <th className="w-28">Ph.no</th>
              <th className="w-32">Email</th>
              <th className="w-36">Hobbies</th>
              <th className="w-36">Activity</th>
            </tr>
          </thead>
          <tbody>
            {info.map((element, ind) => (
              <>
                <tr className="text-center border-b border-black">
                  <td>{ind + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.dob}</td>
                  <td>{element.phone}</td>
                  <td>{element.email}</td>
                  <td>
                    {element.hobbies.map((elem) => (
                      <>
                        <div>{elem}</div>
                      </>
                    ))}
                  </td>
                  <td className="space-x-1">
                    <button
                      className="border px-2 bg-blue-400 rounded-lg hover:border-black"
                      onClick={() => handleEditValues(element)}
                    >
                      Edit
                    </button>
                    <button
                      className="border px-2 bg-red-400 rounded-lg hover:border-black"
                      onClick={() => delHandler(element.id)}
                    >
                      Delete
                    </button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Change your information</DialogTitle>
                      <DialogContent>
                        <Formik
                          initialValues={{
                            name: element.name,
                            dob: element.dob,
                            email: element.email,
                            phone: element.phone,
                          }}
                          onSubmit={(values) => {
                            handleUpdate(values);
                          }}
                        >
                          {({ values, setFieldValue }) => {
                            {
                              {
                                useEffect(() => {
                                  {
                                    /* Object.entries(userDetails).forEach(
                                    ([key, value]) => {
                                      console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
                                      setFieldValue(key, value);
                                    }
                                  );
                                }, [userDetails]); */
                                  }

                                  {
                                    /* OR */
                                  }

                                  Object.entries(userDetails).forEach(
                                    (element) => {
                                      console.log(element);
                                      console.log(
                                        `${element[0]} ${element[1]}`
                                      );
                                      setFieldValue(element[0], element[1]);
                                    }
                                  );
                                }, [userDetails]);
                              }
                            }
                            return (
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
                                      </div>
                                    </div>

                                    <div className="flex items-center">
                                      <div className="w-1/2 flex">
                                        <label className="pb-3">DOB: </label>
                                      </div>
                                      <div className="pl-2 border-l border-black">
                                        <Field
                                          name="dob"
                                          type="date"
                                          className="border"
                                        />
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
                                      </div>
                                    </div>
                                  </div>
                                  {/* <div className="flex justify-center items-center pt-2">
                                <button
                                  type="submit"
                                  className="bg-green-700 px-3 py-2 font-bold rounded-full hover:bg-green-500"
                                >
                                  Submit now
                                </button>
                              </div> */}
                                </div>
                                <div>
                                  <Button type="submit">Save Changes</Button>
                                </div>
                              </Form>
                            );
                          }}
                        </Formik>
                      </DialogContent>
                      <DialogActions></DialogActions>
                    </Dialog>
                  </td>
                </tr>
              </>
            ))}

            {/* <tr className="text-center border-b border-black text-sm">
              <td>1</td>
              <td>Shivam</td>
              <td>14-02-1999</td>
              <td>1234567895</td>
              <td>xxx@gmail.com</td>
              <td className="flex flex-col items-center">
                <div>Bunjee</div>
                <div>Carrom</div>
                <div>Yoyo</div>
              </td>
              <td className="space-x-1">
                <button className="border px-2 bg-blue-400 rounded-lg hover:border-black">Edit</button>
                <button className="border px-2 bg-red-400 rounded-lg hover:border-black">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
