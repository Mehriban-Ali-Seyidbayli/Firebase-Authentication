import { useState } from "react";
import { login } from "./firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await login(email, password);

        if (user) {
            navigate("/", {
                replace: true
            })
        }
    }

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="form-control w-75 my-3" type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input className="form-control w-75  my-3" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-success w-25 my-5" disabled={!email || !password} type="submit">Log In</button>
                <Link to={"/"}>Back</Link>
            </form>
        </div>
    )
}

export default Login;