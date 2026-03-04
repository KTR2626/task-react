import React, { useState } from 'react'

const Counter = () => {

    // カウンターのやつ
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* カウンターの表示 */}
            <button onClick={() => setCount(count - 1)}>-1</button>

            <button onClick={() => setCount(count + 1)} >
                +1
            </button>

            <h2>count : {count}</h2>
        </div>
    )
}

export default Counter