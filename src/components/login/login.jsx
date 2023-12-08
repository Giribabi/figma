import React from "react";
import './login.css'
import google from '../Assets/google.png'

function Login(){
    return (
        <div className="page">
            <div className="heading">
                <h2>Want to check out this <br></br>file? Sign Up or Log in</h2>
            </div>
            <br></br>
            <div className="google">
            <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile+email&access_type=online&prompt=select_account&state=Cp1htJLX2kGSrgxHHhPM11vmZgPk5Y8GTSvcmHbS3Nc9"><img src={google} className="google-icon" alt="google_logo"></img><span className="head">Continue with Google</span></a>
            </div>
            <br></br>
            <br></br>
            <div className="or">
                or
            </div>
            <div className="email">
                <input type="email" placeholder="Email"></input>
            </div>
            <br></br>
            <div className="password">
                <input type="password" placeholder="Password"></input>
            </div>
            <br></br>
            <div className="agree">

            </div>
            <br></br>
            <div className="account">
                Create account
            </div>
            <br></br>
            <br></br>
            <div className="foot">
                By clicking "Create account" or "Continue with Google", you<br></br> agree to the <a className="figmatos" href="https://www.figma.com/summary-of-policy">Figma TOS</a> and <a href="https://www.figma.com/privacy" className="privacy">Privacy Policy</a>
            </div>
            <br></br>
            <div className="foot1">
                <a>Use Single sign-on</a>
            </div>
            <br></br>
            <div className="foot2">
                Already have an account? <span className="login"><a>Log in</a></span>
            </div>
            <br></br>
        </div>
    )
}
export default Login