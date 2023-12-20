import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0)

    const incDec = (piece: number) => {
        setCount(count + piece)
    }

    return (
        <div>
            <h1>{count}</h1>

            <button className={classes.button} onClick={() => incDec(1)}>PLUS 1</button>
            <button className={classes.button} onClick={() => incDec(-1)}>MINUS 1</button>
        </div>
    );
};