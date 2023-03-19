import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUser from "../components/AddUser";
import UserProfile from "../components/UserProfile";

const Admin = () => {
  const [inputs, setInputes] = useState({
    userName: "",
    password: "",
    fullName: "",
    branch: "",
    campus: "",
    yearOfPassing: "",
    role: "",
    status: "",
    emailId: "",
    mobile: "",
    projectId: "",
  });
  const handleChange = (e) => {
    setInputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const userData = JSON.parse(localStorage.getItem("userInfo"));

  const handleUser = () => {
    const data = {
      userName: inputs.userName,
      password: inputs.password,
      fullName: inputs.fullName,
      branch: inputs.branch,
      campus: inputs.campus,
      yearOfPassing: inputs.yearOfPassing,
      role: inputs.role,
      status: inputs.status,
      emailId: inputs.emailId,
      mobile: inputs.mobile,
      projectDetails: {
        projectId: inputs.projectId,
      },
    };
    axios
      .post("http://localhost:8080/user/add", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-5 mx-auto shadow-lg rounded border my-5 py-3 px-4">
        <button
          className="btn btn-primary w-100 shadow my-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add User
        </button>
          <UserProfile userData={userData} />
        </div>
       
        </div>
       
        <AddUser handleChange={handleChange} handleUser={handleUser} />
      </div>
    </>
  );
};

export default Admin;
