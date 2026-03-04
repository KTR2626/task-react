import React, { useEffect, useState } from 'react'

const BmiCalculator = () => {
    // BMI判定用のstate（体重、身長、BMI数値、判定で判定だけ文字列）
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [bmiResult, setBmiResult] = useState("");
    
    //BMIをuseEffect時に計算するためのコード
    useEffect(() => {
        // どっちか空の時は計算しないようにする
        if (!height || !weight) {
            setBmi(null);
            setBmiResult("");
            return;
        }
        //計算準備と計算
        const h = height / 100;
        const w = weight;
        const bmiCalc = w / (h * h);
    
        setBmi(bmiCalc);
    
        if (bmiCalc < 18.5) {
            setBmiResult("痩せ");
        } else if (bmiCalc < 25) {
            setBmiResult("普通");
        } else {
            setBmiResult("肥満");
        }
    }, [height, weight])
    
    return (
        <div>
            {/* BMI判定表示 */}
            <h3>BMI計算機</h3>
            <input
                type="number"
                placeholder="身長(cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <input
                type="number"
                placeholder="体重(kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            
            <div>
                <p>BMI: {bmi}</p>
                <p>判定: {bmiResult}</p>
            </div>
        </div>
    )
}

export default BmiCalculator