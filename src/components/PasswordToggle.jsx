import React, { useState } from 'react'

const PasswordToggle = () => {

    // トグルでのパスワードの表示非表示のやつ
    const [show, setShow] = useState(false);

    return (
        <div>
            {/* トグルでのパスワード表示非表示 */}
            <h3>PWを入力してください</h3>
            {/* input type=passwordで伏字表示になる */}
            <input type={show ? "text" : "password"} />
            <br />
            <button onClick={() => setShow(!show)}>
                {show ? "非表示" : "表示"}
            </button>
        </div>
    )
}

export default PasswordToggle