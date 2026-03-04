import React, { useState } from 'react'

const EmailPhoneForm = () => {

    // メール・電話形式判定用
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    return (
        <div>
            {/* メール・電話の入力形式判定 */}
            <h3>メール・電話番号を登録してください</h3>

{/* メール部分 （備考：JavaScriptでは 値そのものを条件式に使うと、自動で true / false に変換される。
① 真（true）とみなされるもの
空でない文字列 "こんにちは"
数字（0以外） 123
配列やオブジェクト [] {}
true
② 偽（false）とみなされるもの
空文字 ""
数字 0
null
undefined
false）*/}
            <input
                type="text"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
        // 正規表現かチェックする方法：正規表現のパターンを定める→テストメソッドを利用して判定※正パターン.test(チェック対象の文字列)で行う
                onBlur={() => {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                setEmailError(regex.test(email) ? "" : "メールアドレス形式が不正です");
                }}
            />
            {emailError ? (<p style={{ color: "red" }}>{emailError}</p>) : null}

            <br />

{/* 電話番号 */}
            <input
                type="text"
                placeholder="電話番号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => {
                const regex = /^\d{10,11}$/;
                if (!regex.test(phone)) {
                    <p style={{ color: "red" }}>電話番号形式が不正です</p>
                }
                setPhoneError(regex.test(phone) ? "" : "電話番号形式が不正です");
                }}
            />
            {phoneError ? (<p style={{ color: "red" }}>{phoneError}</p>) : null}

        </div>
    )
}

export default EmailPhoneForm