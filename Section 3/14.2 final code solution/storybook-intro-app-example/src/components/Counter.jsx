import { ButtonCounter} from "./ButtonCounter";
import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <br />
            <br />
            <ButtonCounter
            onClick={handleCount}
            label='increment'
            backgroundColor='#c4fff3'
            buttonStyleVersion='counter-button2'
            size='large'
            />
        </div>
    )

}