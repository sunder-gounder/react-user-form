
import React, { useState } from "react";

import { toast } from "react-toastify";
import Header from "../Components/Header";

const HomePage = () => {
  
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");

 
   


  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    //show data in json format
    alert(JSON.stringify([ name,lastname,email,password,gender] ));

    if (name === "") {
      toast.error("Name Is Required");
    } else if (email === "") {
      toast.error("Email Is Required");
    } else if (password === "") {
      toast.error("Password is Required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("last_name", lastname);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
    
      toast.success("User Saved!");
    }
    
  
  };

  return (
    <>
      <Header />
      <div class="row">
            <div className="col-md-3 center">
      <form className="col-md-3 center">
      <div className="container content mt-4" >
        <h5> Add User Details</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                id="exampleInputName"
               
              />
            </div>
            <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                className="form-control"
                id="exampleInputName"
               
              />
            </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            {/* radios button input */}
            <div className="d-flex flex-row">
              Gender :
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Male"
                  defaultChecked={gender === "Male"}
                  onClick={(e) => setgender(e.target.value)}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>

              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Female"
                  defaultChecked={gender === "Female"}
                  onClick={(e) => setgender(e.target.value)}
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
                </label>
              </div>
              <div className="form-check ms-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Gender"
                  value="Other"
                  defaultChecked={gender === "Other"}
                  onClick={(e) => setgender(e.target.value)}
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Other
                </label>
              </div>
              
            </div>
            <div className="form-check mt-3">
              
              
            </div>
            <button
              type="submit"
              className="form__submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* col-md-6 ends */}

          
            <div className="mb-3">
              
             
              
            </div>
          </div>
        </div>
        </form>
        </div>
        </div>
    </>
  );
};

export default HomePage;
