import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
      const userDetail = {password,email} 
      const api = await fetch("http://localhost:4500/login/send",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userDetail)
      })
      const result = await api.json()
      if(api.ok && result.msg=="login successfully"){

          console.log("userCreated Successfully", result);
          setPassword("")
          setEmail("")
          navigate("/logincreated")
        }
        else {
            
            toast.error("invalid email or password try again kiddo")
          }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Login Into Your Account</h1>
            <p>You can also use without Login</p>
            <form>
              <div style={{display:"block"}}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
              <button type="submit" onClick={handleLogin}>
                SignUp
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
