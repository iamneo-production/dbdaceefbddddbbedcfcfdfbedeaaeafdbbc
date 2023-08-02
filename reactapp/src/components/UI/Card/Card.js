import React, { useState } from "react";
import Button from "../Button/Button";


export const Card = ({key , question , correctAnswerMarkUpdate , attempt , options , answer }) => {
    const [dis,setDis] = useState(false);

    const handler = (isCorrect) => {
        if(isCorrect){
            correctAnswerMarkUpdate();
        }
        attempt();
        setDis(true);
    }
    return(
        <div>
            <h4>{question}</h4>
            <div>
                <Button onClick={()=>{handler((answer==options.option1))}} disabled={dis}>{options.option1}</Button>
                <Button onClick={()=>{handler((answer==options.option2))}} disabled={dis}>{options.option2}</Button>
                <Button onClick={()=>{handler((answer==options.option3))}} disabled={dis}>{options.option3}</Button>
                <Button onClick={()=>{handler((answer==options.option4))}} disabled={dis}>{options.option4}</Button>
            </div>
        </div>
    )
}

export default Card;