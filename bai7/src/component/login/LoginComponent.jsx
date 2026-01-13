import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {checkLogin} from "../../service/userService";

function LoginComponent() {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const handleLogin = async () => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;

        if (!username || !password) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const user = await checkLogin(username, password);
        if (user) {
            dispatch({type: 'LOGIN', payload: user});
            navigate('/');
        } else {
            setError("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    }

    return (
        <div className="container">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label>Username:</label>
                <input type="text" ref={usernameRef} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" ref={passwordRef} className="form-control"/>
            </div>
            <button onClick={handleLogin} className="btn btn-primary mt-3">Login</button>
        </div>
    )
}

export default LoginComponent;