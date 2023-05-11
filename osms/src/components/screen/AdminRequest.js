import React, { useEffect, useState } from "react";
import "../css/ServiceStatus.css";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
function AdminRequest({ setTitle }) {
  const [requests, setRequests] = useState();
  const [model, setModel] = useState(true);
  //clicked request deatils
  const [ClickedRequest, setClickedRequest] = useState([]);
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  useEffect(() => {
    setTitle("Requests");
  });

  const handelComponentClickToUpdate = (requestId) => {
    setModel(false);
    fetch(`http://localhost:5000/api/requests/${requestId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((request) => {
        if (request.error) {
          notifyA(request.error);
        } else {
          console.log(request);
          setClickedRequest(request);
        }
      });
  };
  //print
  const handlePrint = () => {
    window.print();
  };

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
            <button className="btn btn-default no-print" onClick={handlePrint}>
              Print
            </button>
          </div>
          <div className="panel-body" id="print-section">
            {model ? (
              <form className="form-horizontal" role="form">
                <ul className="card-list">
                  {requests && requests.length !== 0 ? (
                    requests.map((request) => {
                      return (
                        <li
                          className="card"
                          onClick={() => {
                            handelComponentClickToUpdate(request._id);
                          }}
                        >
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
            ) : (
              <div class="panel-body">
                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label
                      class="control-label col-md-2 col-md-offset-2"
                      for="id_title"
                    >
                      Request Tnfo
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.reqInfo}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      class="control-label col-md-2 col-md-offset-2"
                      for="id_title"
                    >
                      Description
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.description}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      class="control-label col-md-2 col-md-offset-2"
                      for="id_title"
                    >
                      Name
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      class="control-label col-md-2 col-md-offset-2"
                      for="id_adults"
                    >
                      Address{" "}
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-4">
                        <div
                          class="form-group internal"
                          style={{ height: "0 auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.address1}
                          </h1>
                        </div>
                      </div>

                      <div class="col-md-4 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.address2}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      class="control-label col-md-2 col-md-offset-2"
                      for="id_email"
                    >
                      Contact
                    </label>
                    <div class="col-md-6">
                    <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.email}
                          </h1>
                        </div>
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.mobile}
                          </h1>
                        </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group internal">
                      <label
                        class="control-label col-md-2 col-md-offset-2"
                        for="id_title"
                      >
                        City
                      </label>
                      <div class="col-md-8">
                        <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.city}
                          </h1>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group internal">
                      <label
                        class="control-label col-md-2 col-md-offset-2"
                        for="id_title"
                      >
                        State
                      </label>
                      <div class="col-md-8">
                        <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.state}
                          </h1>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group internal">
                      <label
                        class="control-label col-md-2 col-md-offset-2"
                        for="id_title"
                      >
                        Zip Code
                      </label>
                      <div class="col-md-8">
                        <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.zip}
                          </h1>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-group internal">
                      <label
                        class="control-label col-md-2 col-md-offset-2"
                        for="id_checkin"
                      >
                        Date
                      </label>
                      <div class="col-md-8">
                        <div class="col-md-8 indent-small">
                        <div
                          class="form-group internal"
                          style={{ height: "auto" }}
                        >
                          <h1 class="form-control">
                            {ClickedRequest.date}
                          </h1>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div class="form-group">
                    <div class="col-md-offset-4 col-md-3">
                      <button
                        class="btn-lg btn-primary"
                        type="button"
                        //onClick={postDetails}
                      >
                        Request
                      </button>
                    </div>
                    <div class="col-md-3">
                      <button
                        class="btn-lg btn-danger"
                        style={{ float: "right" }}
                        type="submit"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRequest;
