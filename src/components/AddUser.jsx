import axios from "axios";
import React, { useEffect, useState } from "react";

const AddUser = ({ handleChange,handleUser }) => {
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      name="userName"
                      id="userName"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="fullname"
                      name="fullName"
                      id="fullName"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Campus
                    </label>
                    <input
                      type="text"
                      placeholder="campus"
                      name="campus"
                      id="campus"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Status
                    </label>
                    <select
                      name="status"
                      id="status"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option value="true">Select</option>
                      <option value="true">Active</option>
                      <option value="false">Not Active</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Year Of Passing
                    </label>
                    <input
                      type="text"
                      placeholder="yearOfPassing"
                      name="yearOfPassing"
                      id="yearOfPassing"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email Id
                    </label>
                    <input
                      type="text"
                      placeholder="emailId"
                      name="emailId"
                      id="emailId"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="text"
                      placeholder="mobile"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Project Id
                    </label>
                    <input
                      type="text"
                      placeholder="project id"
                      name="projectId"
                      id="projectId"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Branch
                    </label>
                    <input
                      type="text"
                      placeholder="branch"
                      name="branch"
                      id="branch"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Role
                    </label>
                    <select
                      name="role"
                      id="role"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="ADMIN">Admin</option>
                      <option value="GUIDE">Guider</option>
                      <option value="STUDENT">Student</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button "
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUser}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
