import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
// import Patient from "./pages/Patient";
import { useStoreContext } from './utils/GlobalStore';
import API from './utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "./utils/actions";
import Landing from './pages/landing';
import { library } from '@fortawesome/fontawesome-svg-core';
 import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';  
import Footer from './components/footer.jsx';

library.add(far, fas);

function App() {
    // Our provider is setup in index.js so we can use the GlobalStore here easily.

    // Something we want to do at the beginning of the application is check if the user is logged in or not, if the user is, we'll
    // dispatch an action
    
        

    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
        API.checkUserInfo().then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            })
        }).catch(err => {
            // Not able to be logged in, leave us logged out
            console.log("error", err);
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }, []);

    const logout = () => {
        API.logout().then(() => {
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }

    return (

        <Router>
            <div className="container"> <div className="app-main">
                {/* Componetize this into Nav */}
            
                <div>
                        {!state.userLoggedIn ? (
                            // if the user is Logged out
                            <>
                                <b>Welcome Guest!</b> &nbsp;&nbsp;&nbsp;
                                <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
                            </>
                        ) : (
                            // If the user is Logged In
                            <>
                                <b>Welcome {state.email}!</b> &nbsp;&nbsp;&nbsp;
                                <Link to="/members">Members</Link> | <a onClick={() => logout() }href="/">Logout</a>
                            </>
                        )
                        }
                    </div>
                <Switch>
                    {                        
                        !state.userLoggedIn ? (
                            // These routes are only available to LOGGED OUT users
                            <>                                
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                                <Route exact path="/" component={Landing} />
                            </>
                        ) : (
                            // These routes are only available to LOGGED IN users
                            <>
                                <Route exact path={["/login","/signup"]}>
                                    {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                    <Redirect to="/members" />
                                </Route>
                                <Route exact path="/members" component={Members} />
                                
                            </>
                            )
                    }
                    {
                        /* These routes are ALWAYS available */
                    }
                    
                    <Route>
                        { /*If none of the other pages match, redirect them to the main page */}
                        <Redirect to="/" />
                    </Route>
                    
                </Switch>
                <Footer sticky="bottom" />
                </div>
            </div>
        </Router>
    );
}

export default App;
