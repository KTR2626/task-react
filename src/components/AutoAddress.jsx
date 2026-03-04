import React, { useState } from 'react'

const AutoAddress = () => {

    // 住所自動入力API用
    const [zipcode, setZipcode] = useState("");             // 郵便番号
    const [prefecture, setPrefecture] = useState(""); // 都道府県
    const [city, setCity] = useState("");           // 市区町村

    const SearchAddress = async () => {
    if (!zipcode) return; // 空なら何もしない

  // console.log(zipcode);
    try {
        const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
        const data = await res.json();

      // console.log(data);     

        if (data.results) {
            setPrefecture(data.results[0].address1);
            setCity(data.results[0].address2 + data.results[0].address3);
        } else {
            alert("郵便番号に該当する住所がありません");
            setPrefecture("");
            setCity("");
        }
    } catch (err) {
        console.error(err);
        alert("住所取得に失敗しました");
    }
};

    return (
        <div>
            {/* 住所自動入力APIの表示 */}
            <h3>郵便番号から住所自動入力</h3>

            <input
                type="text"
                placeholder="郵便番号（ハイフンなし）"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
            />
            <button onClick={SearchAddress}>自動入力</button>
            <br />
            <input type="text" placeholder="都道府県" value={prefecture} readOnly />
            <br />
            <input type="text" placeholder="市区町村" value={city} readOnly />
        </div>
    )
}

export default AutoAddress