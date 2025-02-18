import { useState } from "react"
import generateRandomNum from "../utils/randomizer"


function RandomNumber ({maxNum}){
    const [randomNum, setRadnomNum] = useState(generateRandomNum())
    const changeRandomNum = () => {
        setRadnomNum(generateRandomNum(maxNum))
    }
    return (
        <div>
            <h1>{randomNum? randomNum : "0"}</h1>
            <button onClick={changeRandomNum}>generate new number</button>
        </div>
    )
}

export default RandomNumber