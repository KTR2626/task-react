import React, { useState } from 'react'

const FoodCheckbox = () => {

    // チェックボックスのやつ
    const [selected, setSelected] = useState([]);
    const checkChange = (e) => {
        const value = e.target.value;
    
    if (e.target.checked) {
    // selected配列の中身を展開して新しいvalueを追加する
        setSelected([...selected, value]);
        } else {
    // .filter(...)配列専用メソッドで条件に合うものだけ残す、foodは配列の中身を1個ずつ取り出した変数名で一個一個取り出してチェックしてる
        setSelected(selected.filter(food => food !== value));
        }
    };  

    return (
        <div>
            {/* チェックボックスの表示 */}
            <h3>食べ物チェックボックス</h3>

                <input type="checkbox" value="すし" onChange={checkChange} />
                すし
            <br />

                <input type="checkbox" value="天ぷら" onChange={checkChange} />
                天ぷら
            <br />

                <input type="checkbox" value="焼肉" onChange={checkChange} />
                焼肉

            {/* △△.join→配列をカンマ区切りにできるメソッド */}
            <p>
                選択中：
                {selected.length > 0 ? selected.join(", ") : "なし"}
            </p>
        </div>
    )
}

export default FoodCheckbox