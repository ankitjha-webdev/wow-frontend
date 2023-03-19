import React from "react";

const TImeSheetModal = ({timesheet, handleStudentTimesheet}) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Today's Time Sheet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Task</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {timesheet &&
                    timesheet.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.task}</td>
                        <td>{data.startTime}</td>
                        <td>{data.endTime}</td>
                        {/* <td>{data.timeSheetId}</td> */}
                        <td>
                          <button
                            className="btn btn-danger btn-sm mx-2"
                            name="REJECTED"
                            value="REJECTED"
                            onClick={() =>
                              handleStudentTimesheet(
                                "REJECTED",
                                1,
                                data.timeSheetId
                              )
                            }
                          >
                            Reject
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            name="APPROVED"
                            value="APPROVED"
                            onClick={() =>
                              handleStudentTimesheet(
                                "APPROVED",
                                2,
                                data.timeSheetId
                              )
                            }
                          >
                            Accept
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TImeSheetModal;
