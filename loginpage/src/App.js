import React from 'react';
import './loginpage.css';
import backgroundImage from './5533516.jpg';
const main = require("./main");

function Login() {
  return (
    <div className="body" style={{backgroundImage: `url(${backgroundImage})`}}>
      <h1 style={{color: 'white', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontSize: '100px', marginLeft: '800px', marginTop: '50px'}}>Login</h1>
      <div className="square"></div>
      <div className="p1"><b>Username/Email</b></div>
      <input type="text" name="email" id="user" style={{width: '400px', height: '25px', position: 'relative', top: '-420px', left: '725px', backgroundColor: 'rgba(39, 35, 35, 0.843)', color: 'white'}} />
      <div className="p2"><b>Password</b></div>
      <input type="password" name="pass" id="password" style={{width: '400px', height: '25px', position: 'relative', top: '-350px', left: '725px', backgroundColor: 'rgba(39, 35, 35, 0.843)', color: 'white'}} />
      <button style={{height: '40px', width: '130px', backgroundColor: 'white', color: 'black', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '20px', borderRadius: '50px', position: 'relative', top: '-270px', left: '455px'}} id="sign" onClick={() => main}><b>Sign in</b></button>
      <a href="forgotcred.html" style={{color: 'white', position: 'relative', top: '-225px', left: '312px'}}>Forgot your credentials</a>
      <a href="registerpage.html" style={{color: 'white', position: 'relative', top: '-190px', left: '120px'}}>Haven't signed up yet? Register now!</a>
    </div>
  );
}

export default Login;
