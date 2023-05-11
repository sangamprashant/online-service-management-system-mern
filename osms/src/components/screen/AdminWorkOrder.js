import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; 


function AdminWorkOrder() {
    const [users, setUsers] = useState([]);

    // Toast functions
    const notifyA = (msg) => toast.error(msg);
  
    useEffect(() => {
      fetch("http://localhost:5000/api/admin/workdone", {
        method: "get"
      })
        .then((res) => res.json())
        .then((users) => {
          if (users.error) {
            notifyA(users.error);
          } else {
            setUsers(users);
          }
        });
    }, []);
  
    return (
      <div>
        <div class="sales-boxes" style={{marginRight:"5%"}}>
          <div class="recent-sales box">
            <div class="title">List of Requesters</div>
            <div class="sales-details">
              <ul class="details">
                <li class="topic">Name</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.name}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">Request Info</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.reqInfo}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">Address</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.address1}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">City</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.city}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">mobile</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.mobile}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">Address</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.address1}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">Technician</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.technicianAlloc}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">Date of Allocation</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <li key={user._id}>
                            <a>{user.DateAlloc}</a>
                          </li>
                        </>
                      );
                    })
                  : ""}
              </ul>
              <ul class="details">
                <li class="topic">Action</li>
                {users.length !== 0
                  ? users.map((user) => {
                      return (
                        <>
                          <hr />
                          <div style={{display:'flex',justifyContent:"sapce-around"}}>
                          <button type="button">E</button>
                          <button type="button">E</button>
                          <button type="button">E</button>
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
    );
  }
export default AdminWorkOrder
