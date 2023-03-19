import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TImeSheetModal from "../components/TImeSheetModal";
import UserProfile from "../components/UserProfile";

const Guider = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const [students, setStudents] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [timeSheetUserId, setTimeSheetUserId] = useState("");
  const [timesheet, setTimeSheet] = useState("");
  const [timeSheetStatus, setTimeSheetStatus] = useState('');
  const childRef = useRef(null);

  useEffect(() => {
    if (userData.userId) {
      axios
        .get(`http://localhost:8080/user/studentDetails/${userData.userId}`)
        .then((res) => {
          if (res.data) {
            axios
              .get(
                `http://localhost:8080/user/studentDetails?projectId=${res.data.projectDetails.projectId}`
              )
              .then((response) => {
                setStudents(response.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    axios
      .get(
        `http://localhost:8080/timesheet/getTimeSheetByUserid?userId=${timeSheetUserId}`
      )
      .then((res) => {
        let response = res.data;
        const FiltredResData = response.filter(
          (i) => i.timeSheetStatus === "SUBMITTED"
        );
        setTimeSheet(FiltredResData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userData.userId, timeSheetUserId]);

  const handleStudentTimesheet = (msg, option, timeSheetId) => {
    let timeSheetStatus;
    if (option === 1) {
      timeSheetStatus = msg;
    } else {
      timeSheetStatus = msg;
    }
    axios
      .post(
        `http://localhost:8080/timesheet/checkTimeSheet?userId=${userData.userId}&timeSheetId=${timeSheetId}&timeSheetStatus=${timeSheetStatus}`
      )
      .then((res) => {
        setTimeSheetStatus(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            {/* <div className="card">
              <div className="card-body">
                <p>
                  {" "}
                  <b className="h5">Name: </b> {userData.userInfo.name}
                </p>
                <p>
                  {" "}
                  <b className="h5">Department: </b> {userData.userInfo.dept}
                </p>
                <p>
                  {" "}
                  <b className="h5">Registration Number: </b>{" "}
                  {userData.userName}
                </p>
                <p>
                  {" "}
                  <b className="h5">Campus: </b> {userData.userInfo.campus}
                </p>
                <p>
                  {" "}
                  <b className="h5">Project: </b> {userData.userInfo.project}
                </p>
                <p>
                  {" "}
                  <b className="h5">Status: </b> {userData.userStatus}
                </p>
              </div>
            </div> */}
             <UserProfile userData={userData} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Sr No</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Registration No.</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Campus</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">View Time Sheet</th>
                </tr>
              </thead>
              <tbody>
                {students &&
                  students.map((data, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.fullName}</td>
                      <td>{data.regNo}</td>
                      <td>{data.branch}</td>
                      <td>{data.campus}</td>
                      <td>
                        {data.projectDetails.projectName}
                        <h1> {data.projectDetails.users.userId}</h1>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() =>
                            setTimeSheetUserId(
                              data.projectDetails.users[index].userId
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          {/* <!-- Modal --> */}
          <TImeSheetModal timesheet={timesheet} handleStudentTimesheet={handleStudentTimesheet}/>
        </div>
      </div>
    </>
  );
};

export default Guider;
