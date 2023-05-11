import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/css/Dashboard.css";
import Navbr from "./components/Navbr";
import Login from "./components/screen/Login";
import SignUp from "./components/screen/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screen/Home";
import PagenotFound from "./components/screen/PagenotFound";
import { LoginContext } from "./context/LoginContext";
import LogOut from "./components/screen/LogOut";
import UserProfile from "./components/screen/UserProfile";
import SubmitRequest from "./components/screen/SubmitRequest";
import ServiceStatus from "./components/screen/ServiceStatus";
import ChangePassword from "./components/screen/ChangePassword";
import AdminDashboard from "./components/screen/AdminDashboard";
import AdminDashBoardRequesters from "./components/screen/AdnimDashBoardElement/AdnimDashBoardRequesters";
import AdminRequestersNavFetch from "./components/screen/AdminRequestersNavFetch";
import AdminWorkOrder from "./components/screen/AdminWorkOrder";
import AdminProducts from "./components/screen/AdminProducts";
function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [active, setActive] = useState(false);
  const [title ,setTitle] = useState("Welcome")

  function handleSidebarClick() {
    setActive(!active);
  }
  return (
    <BrowserRouter>
    <LoginContext.Provider value={{ setUserLogin ,setIsAdmin }}>
      <div>
        <div className={`sidebar ${active ? "active" : ""}`}>
          <Navbr  login={userLogin} isAdmin={isAdmin}/>
        </div>
        <section class="home-section">
          <nav>
            <div className="sidebar-button">
              <i
                className={`bx ${active ? "bx-menu-alt-right" : "bx-menu"}`}
                onClick={handleSidebarClick}
              ></i>
              <span className="dashboard">{title}</span>
            </div>
          </nav>

          <div class="home-content">
            <Routes>
              <Route exact path="/" element={<Home setTitle={setTitle} />}></Route> 
              <Route exact path="/:type/signup" element={<SignUp setTitle={setTitle} />}></Route>
              <Route exact path="/:type/signin" element={<Login setTitle={setTitle} />}></Route>
              <Route exact path="/:type/:name/profile" element={<UserProfile setTitle={setTitle} />}></Route>
              <Route exact path="/user/:name/submitrequest" element={<SubmitRequest setTitle={setTitle} />}></Route>
              <Route exact path="/user/:name/servicestatus" element={<ServiceStatus setTitle={setTitle} />}></Route>
              <Route exact path="/:type/:name/changepassword" element={<ChangePassword setTitle={setTitle} />}></Route>
              <Route exact path="/logout" element={<LogOut setTitle={setTitle} />}></Route>
              <Route exact path="/admin/:name/dashboard" element={<AdminDashboard setTitle={setTitle} />}></Route>
              <Route exact path="/admin/:name/workorder" element={<AdminWorkOrder setTitle={setTitle} />}></Route>
              <Route exact path="/admin/:name/requestrs" element={<AdminRequestersNavFetch setTitle={setTitle} />}></Route>
              <Route exact path="/admin/:name/products" element={<AdminProducts setTitle={setTitle} />}></Route>
              <Route exact path="*" element={<PagenotFound setTitle={setTitle} />}></Route>
            </Routes>
            <ToastContainer theme="dark" />
          </div>
        </section>
      </div>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;