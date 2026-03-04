import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import FoodCheckbox from "./components/FoodCheckbox";
import PasswordToggle from "./components/PasswordToggle";
import EmailPhoneForm from "./components/EmailPhoneForm";
import BmiCalculator from "./components/BmiCalculator";
import AutoAddress from "./components/AutoAddress";
import Login from "./components/Login";

function App() {
// 画面表示の切り替えのための変数定義(topとログインページとログイン後のホーム画面)
  const [screen, setScreen] = useState("top");


  return (
    <div>
      
      {/* トップ */}
      {screen === "top" && (
        <>
          <h2>トップ画面</h2>
          <button onClick={() => setScreen("login")}>
            ログイン画面へ
          </button>
        </>
      )}

      {/* ログインフォーム */}
      {screen === "login" && (
        <>
        <Login LoginSuccess={() => setScreen("home")} />
        <button onClick={() => setScreen("top")}>
            トップに戻る
          </button>
        </>
      )}

      {/*ホーム（ログインした後の画面）*/}
      {screen === "home" && (
        <>
          <h2>ホーム画面</h2>
          <button onClick={() => setScreen("login")}>
            ログアウト
          </button>

          <Counter />
          <hr />
          <FoodCheckbox />
          <hr />
          <PasswordToggle />
          <hr />
          <EmailPhoneForm />
          <hr />
          <BmiCalculator />
          <hr />
          <AutoAddress />
        </>
      )}

    </div>

  );
}

export default App;
