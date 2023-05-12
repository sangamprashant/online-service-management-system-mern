import React, { useEffect, useState } from "react";
import "../css/SubmitRequest.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import Delete from "./button/Delete";
import HandShake from "./button/HandShake";
import ViewComponent from "./button/ViewComponent";

function AdminTechnicians({ setTitle }) {
//model
const [model,setModel]=useState(false)
//technician add
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  //product from data base
  const [Technicians, setTechnicians] = useState([]);

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  useEffect(() => {
    setTitle("Assets");
  });
 
  const handleDelete = (techniciansId) => {
    if(!model){
      fetch(`http://localhost:5000/api/admin/delete/technicians/${techniciansId}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
        } else {
          notifyA(data.error);
        }
      });
    }
  };

  const postDetails = () => {
    fetch("http://localhost:5000/api/admin/add/technicians", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name,
        email,
        city,
        mobile
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          notifyB(data.message);
        } else {
          notifyA(data.error);
        }
      });
  };

  //get data fron server
  useEffect(() => {
    if (!model) {
      fetch("http://localhost:5000/api/admin/get/technicians", {
        method: "get",
      })
        .then((res) => res.json())
        .then((technicians) => {
          if (technicians) {
            setTechnicians(technicians);
           
          } else {
            notifyA("Somethin went wrong");
          }
        });
    }
  }, [model,postDetails,handleDelete]);

  return (
    <div>
      <div class="container">
        <div class="panel panel-primary dialog-panel">
          <div class="panel-heading">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div class="title">List of Technicians</div>
            <div>
              {" "}
              <button
              type="button"
              class="btn-lg btn-danger"
              onClick={() => {
                setModel(!model);
              }}
            >
              {!model ? "Add Technician" : "Cancel"}
            </button>
            </div>
            </div>
            </div>
            <hr />
            {model ? (
              <form class="form-horizontal" role="form">
                <div class="form-group">
                  <label
                    class="control-label col-md-2 col-md-offset-2"
                    for="id_title"
                  >
                    Technician Name
                  </label>
                  <div class="col-md-8">
                    <div class="col-md-8 indent-small">
                      <div class="form-group internal">
                        <input
                          class="form-control"
                          id="id_first_name"
                          placeholder="Technician Name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        ></input>
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
                      Email
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-8 indent-small">
                        <div class="form-group internal">
                          <input
                            class="form-control"
                            id="id_first_name"
                            placeholder="Enter Email  "
                            type="email"
                            required
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          ></input>
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
                     Mobile
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-8 indent-small">
                        <div class="form-group internal">
                          <input
                            class="form-control"
                            id="id_first_name"
                            placeholder=" Enter Mobile Number"
                            type="number"
                            required
                            value={mobile}
                            onChange={(e) => {
                              setMobile(e.target.value);
                            }}
                          ></input>
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
                      City
                    </label>
                    <div class="col-md-8">
                      <div class="col-md-8 indent-small">
                        <div class="form-group internal">
                          <input
                            class="form-control"
                            id="id_first_name"
                            placeholder="
                              Enter City"
                            type="text"
                            required
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          ></input>
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
                      onClick={postDetails}
                    >
                      Add Technician
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div>
                <div class="sales-boxes" style={{ marginRight: "5%" }}>
                  <div class="recent-sales box">
                    <div class="title">List of Products</div>
                    <div class="sales-details">
                      <ul class="details">
                        <li class="topic">Name</li>
                        {Technicians.length !== 0
                          ? Technicians.map((Technician) => {
                              return (
                                <>
                                  <hr />
                                  <li key={Technician._id}>
                                    <a>{Technician.name}</a>
                                  </li>
                                </>
                              );
                            })
                          : ""}
                      </ul>
                      <ul class="details">
                        <li class="topic">City</li>
                        {Technicians.length !== 0
                          ? Technicians.map((Technician) => {
                              return (
                                <>
                                  <hr />
                                  <li key={Technician._id}>
                                    <a>{Technician.city}</a>
                                  </li>
                                </>
                              );
                            })
                          : ""}
                      </ul>
                      <ul class="details">
                        <li class="topic">Mobile</li>
                        {Technicians.length !== 0
                          ? Technicians.map((Technician) => {
                              return (
                                <>
                                  <hr />
                                  <li key={Technician._id}>
                                    <a>{Technician.mobile}</a>
                                  </li>
                                </>
                              );
                            })
                          : ""}
                      </ul>
                      <ul class="details">
                        <li class="topic">Email</li>
                        {Technicians.length !== 0
                          ? Technicians.map((Technician) => {
                              return (
                                <>
                                  <hr />
                                  <li key={Technician._id}>
                                    <a>{Technician.email}</a>
                                  </li>
                                </>
                              );
                            })
                          : ""}
                      </ul>  
                      <ul class="details">
                        <li class="topic">Action</li>
                        {Technicians.length !== 0
                          ? Technicians.map((Technician) => {
                              return (
                                <>
                                  <hr />
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "sapce-around",
                                    }}
                                  >
                                    <button
                                      className=" Product-button "
                                      type="button"
                                      onClick={()=>{handleDelete(Technician._id)}}
                                      
                                    >
                                      <Delete />
                                    </button>
                                    <button
                                      className=" Product-button "
                                      type="button"
                                    >
                                      <ViewComponent />
                                    </button>
                                  </div>
                                </>
                              );
                            })
                          : ""}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
   
  );
}

export default AdminTechnicians;
