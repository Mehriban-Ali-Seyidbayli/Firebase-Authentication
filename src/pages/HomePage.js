import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout, auth, emailVerification } from "../FirebaseC/firebase"
import { logout as logoutHandle } from "../redux/authSlice";
import UpdateProfile from "../components/UpdateProfile";


const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authSlice)

    const handleLogout = async () => {
        await logout()
        dispatch(logoutHandle())
        navigate("/login", {
            replace: true
        })
    }




    const handleVerification = async () => {
        await emailVerification()
    }


    if (user) {
        return (
            <div>
                <div className="login-page">

                    <h1>   {user.photoURL && <img src={user.photoURL} className="rounded-circle mx-3" style={{ width: "40px", }} />}You are logged in({user.email})</h1>
                    <div className="home-btn">
                        <button onClick={handleLogout} className="btn btn-secondary w-25 my-5">Log Out</button>

                        {!user.emailVerified &&
                            <button onClick={handleVerification} className="btn btn-primary w-25 mx-4 ">Verify E-mail</button>
                        }
                        <Link to={"/update"} className="btn btn-success w-25 my-5">Update Profile</Link>
                    </div>

                </div>
            </div>

        )
    }


    return (
        <div>
            <Header />

        </div>


    )
}

export default HomePage;
