import React, { useState } from "react";

const PhoneBook = ({ phoneBook, setPhoneBook }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "Coder",
    lastName: "Byte",
    phoneNumber: "8885559999",
  });

  const clearUserInfo = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneBook((prevState) => [...prevState, userInfo]);
    setUserInfo(clearUserInfo);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="mx-auto text-center my-5" onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-start px-5">
          <div className="form-group col-4">
            <label
              htmlFor="exampleInputEmail1"
              className="d-flex justify-content-start"
            >
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-start px-5">
          <div className="form-group col-4">
            <label
              htmlFor="exampleInputPassword1"
              className="d-flex justify-content-start"
            >
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-start px-5">
          <div className="form-group col-4">
            <label
              htmlFor="exampleInputPassword1"
              className="d-flex justify-content-start"
            >
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              name="phoneNumber"
              value={userInfo.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-start px-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhoneBook;
