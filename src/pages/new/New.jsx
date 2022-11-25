import React from "react";
import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  placeholder=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="username" />
              </div>
              <div className="formInput">
                <label htmlFor="">Name and Surname</label>
                <input type="text" placeholder="first name, last name" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="example@domain.com" />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+34 677 54 1896" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="..." />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Calle del Sombrerete 50, Madrid"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="Spain" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
