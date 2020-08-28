import React, { useRef, useState } from "react";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logologo from '../assets/images/logologo.png';
import ButtonAppBar from '../components/Navbar3/navbar3.jsx';
// import AppJumbo from "../components/jumbotron";
function Login() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        API.login(loginData).then(response => {
            setShowError(false);
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred during login");
        })
    }

    return (
        <>
        <div>
            <div>
              <ButtonAppBar />
            </div>
            <img src= {logologo} style={
                {width:"10%",
               height:"10%",
               display:"block",
               margin:"0 auto",
               marginBottom: "15px",
               border:"none",
            backgroundColor:"transparent"}}
               alt='logo'/>
        <Navbar expand="lg" variant="light" style={{backgroundColor:"#5532A8"}} >
                <Container>
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                  </Container>
        </Navbar>

        </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="signup" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;