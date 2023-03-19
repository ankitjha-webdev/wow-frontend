import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
const Student = () => {
  // const [userInfo, setUserInfo] = useState('');
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const [showModal, setShowModal] = useState(false);
  const [timesheet, setTimeSheet] = useState("");
  //   useEffect(() =>{

  //   }, [userData])
  //   console.log({userData});
  // const data = {userData}
  // console.log(data.userInfo);
  const navigate = useNavigate();
  const [inputs, setInputes] = useState({
    task: "",
    startTime: "",
    endTime: "",
  });

  //   const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setInputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTimeSheet = (e) => {
    e.preventDefault();
    const StartTimeFormat = moment(inputs.startTime).format(
      "DD-MMM-YYYY HH:mm:ss"
    );
    const EndTimeFormat = moment(inputs.endTime).format("DD-MMM-YYYY HH:mm:ss");
    const data = {
      task: inputs.task,
      startTime: StartTimeFormat,
      endTime: EndTimeFormat,
      user: {
        userId: userData.userId,
      },
    };

    axios
      .post("http://localhost:8080/timesheet/add", data)
      .then((res) => {
        if (res.data === "SUCCESS") {
          setShowModal(false);
          navigate(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/timesheet/getTimeSheetByUserid?userId=${userData.userId}`
      )
      .then((res) => {
        if (res.data) {
          setTimeSheet(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="col-6">
          <UserProfile userData={userData} />
        </div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Time Sheet
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Time Sheet
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Task Name
                  </label>
                  <input
                    type="text"
                    placeholder="task name"
                    name="task"
                    id="task"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Start Time
                  </label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    id="startTime"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    End Time
                  </label>
                  <input
                    type="datetime-local"
                    name="endTime"
                    id="endTime"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleTimeSheet}
                  data-bs-dismiss={showModal && "modal"}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Task</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
            </tr>
          </thead>
          <tbody>
            {timesheet &&
              timesheet.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.task}</td>
                  <td>{data.startTime}</td>
                  <td>{data.endTime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
