import React, { useState } from 'react'

const Login = (props) => {

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        if (id === "user1" && pass === "pass1") {
            props.LoginSuccess();
        } else {
            alert("ログイン失敗");
        };
    }

    return (
        <div>
            <h2>ログイン画面</h2>
            <input 
                type="text"
                placeholder='ID'
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <input 
                type="text"
                placeholder='Password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />

            <button onClick={() => handleLogin()}>ログイン</button>
        </div>
    )
}

export default Login