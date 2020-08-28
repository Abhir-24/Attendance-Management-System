// DSC Attendance Management System
// Made by Abhir Raj Shrivastava
// Batch: F2
// Enrollment no. 9919103059

import React, {Component} from "react";
import './register.scss';

  class Register extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;

    return (

      <div className="register">

      <div className="cover">

      <form
      className="submission"
        onSubmit={this.submitForm}
        action="https://formspree.io/moqkovjy"
        method="POST"
      >
        <h2 className="msg">Hello Student, Let Us Fill the Details!</h2>   
        <label className="head">Enter Your Name</label>
        <input type="text" name="name" placeholder="Name" /><br /><br />
        <label className="head">Enter Your Email id</label>
        <input type="email" name="email" placeholder="Email id" /><br /><br />
        <label className="head" htmlFor="batch">Batch</label>
        <input type="text" name="batch" placeholder="Batch" /><br /><br />
        <label className="head">Enter Enrollment Number</label>
        <input type="text" name="enrollno" placeholder="Enrollment Number" /><br /><br />
        <label className="head ">Enter Branch</label>
        <input type="text" name="branch" placeholder="Branch" /><br />
        
        {status === "SUCCESS" ? alert("Your have been registered successfully!"): <button className="final-btn">Submit</button>}
        {status === "ERROR" && alert("Please fill all the details!")}
      </form>
      </div>
      </div>
    );
  }

  submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Register;
