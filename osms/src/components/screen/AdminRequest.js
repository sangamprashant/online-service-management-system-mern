import React, { useEffect, useState } from "react";
import "../css/ServiceStatus.css";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
function AdminRequest({ setTitle }) {
  const [requests, setRequests] = useState();
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  useEffect(() => {
    setTitle("Requests");
  });
  useEffect(() => {
    fetch("http://localhost:5000/api/admin/requests/unassigned", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((requests) => {
        if (requests.error) {
          notifyA(requests.error);
        } else {
          setRequests(requests);
        }
      });
  });
  return (
    <div>
      <div className="container">
        <div className="panel panel-primary dialog-panel">
          <div className="panel-heading">
            <h5>Requests</h5>
          </div>
          <div className="panel-body">
            <form className="form-horizontal" role="form">
              <ul className="card-list">
              {requests && requests.length !== 0 ? (
                  requests.map((request) => {
                    return (
                      <li className="card">
                        <a className="card-description" href="#">
                          <h2>{request.reqInfo}</h2>
                          <p>{request.description}</p>
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <h1>No Item Left</h1>
                )}
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRequest;
