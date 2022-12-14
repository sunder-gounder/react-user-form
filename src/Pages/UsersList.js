import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

const UersList = () => {
  // const [name, setname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [email, setemail] = useState("");
  // const [bloodgroup, setbloodgroup] = useState("");
  // const [userpassword, setuserpassword] = useState("");
  // const [gender, setgender] = useState("");
  
  
  //  useEffect (() => {

  //   const name = JSON.parse(localStorage.getItem('name'));
  //   if (name)
  //   {
  //     setname(name);
  //   }
  // }, []);
  
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
           Users
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
        
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
              
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
                <h4>
                  Gender :{" "}
                  {localStorage.getItem("gender")
                    ? localStorage.getItem("gender")
                    : "NA"}
                </h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UersList;
