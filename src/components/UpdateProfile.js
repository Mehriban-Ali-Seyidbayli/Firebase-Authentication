import { useState } from "react";
import { update, auth, resetPassword } from "../FirebaseC/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { Link } from "react-router-dom";

export default function UpdateProfile() {
    const { user } = useSelector(state => state.authSlice)
    const [displayName, setDisplayName] = useState(user.displayName || "");
    const [avatar, setAvatar] = useState(user.photoURL || "");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await update({
            displayName,
            photoURL: avatar
        })
        dispatch(login({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid
        }))

    }

    const handleReset = async e => {
        e.preventDefault();
        const result = await resetPassword(password)
        if (result) {
            setPassword("")
        }
    }




    return (
        <div className="update">
            <Link to={"/"} className="m-5">Home Page</Link>
            <div className="update-content">
                <form className="d-flex flex-column justify-content-center align-items-center w-100" onSubmit={handleSubmit}  >
                    <h1>Update Profile</h1>
                    {/* <label htmlFor="update">Email</label> */}
                    <input className="form-control  my-3" type="text" id="update" placeholder="Fullname" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                    <button className=" btn btn-success w-25 my-5" type="submit">Update</button>
                </form>
                <form className="d-flex flex-column justify-content-center align-items-center w-100" onSubmit={handleSubmit}  >
                    <h1>Update profile picture</h1>
                    {/* <label htmlFor="update">Email</label> */}
                    <input className="form-control  my-3" type="text" id="update" placeholder="PhotoURL" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                    <button className=" btn btn-success w-25 my-5" type="submit">Update</button>
                </form>
                <form className="d-flex flex-column justify-content-center align-items-center w-100" onSubmit={handleReset}  >
                    <h1>Update Password</h1>
                    {/* <label htmlFor="update">Email</label> */}
                    <input className="form-control  my-3" type="text" id="update" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button disabled={!password} className=" btn btn-success w-25 my-5" type="submit">Update Password</button>
                </form>
            </div>
        </div>

    )
}