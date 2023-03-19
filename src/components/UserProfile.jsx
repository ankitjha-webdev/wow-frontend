import React from "react";

const UserProfile = ({ userData }) => {
  return (
    <>
      <div className="card my-3">
        <div className="card-body ">
          <div className="row">
            <div className="col-6">
            <p><b className="h5 text-primary">Name: </b></p>
            <p><b className="h5 text-primary">Department: </b></p>
            <p><b className="h5 text-primary">Registration Number: </b></p>
            <p><b className="h5 text-primary">Project: </b></p>
            <p><b className="h5 text-primary">Campus: </b></p>
            <p><b className="h5 text-primary">Status: </b></p>
            {/* <h5><b className="h5 text-primary">Department: </b></h5> */}
            
            </div>
            <div className="col-6">
            <p className="text-mute">{userData.userInfo.name}</p>
            <p className="text-mute">{userData.userInfo.dept}</p>
            <p className="text-mute">{userData.userName}</p>
            <p className="text-mute">{userData.userInfo.project}</p>
            <p className="text-mute">{userData.userInfo.campus}</p>
            <p className="text-mute">{userData.userStatus}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*
<p className="text-muted">
            {" "}
            <b className="h5 text-primary">Name: </b> {userData.userInfo.name}
          </p>
          <p className="text-muted">
            {" "}
            <b className="h5 text-primary">Department: </b>{" "}
            {userData.userInfo.dept}
          </p>
          <p className="text-muted">
            {" "}
            <b className="h5 text-primary">Registration Number: </b>{" "}
            {userData.userName}
          </p>
          <p className="text-muted">
            {" "}
            <b className="h5 text-primary">Campus: </b>{" "}
            {userData.userInfo.campus}
          </p>
          <p className="text-muted">
            {" "}
            <b className="h5 text-primary">Project: </b>{" "}
            {userData.userInfo.project}
          </p>
          <p className="text-muted">
            {" "}
            <b className="h5 text-primary">Status: </b> {userData.userStatus}
          </p>
*/ 

export default UserProfile;
