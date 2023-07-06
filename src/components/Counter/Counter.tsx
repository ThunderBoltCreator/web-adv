import {useState} from "react";
import classes from './counter.module.scss'
const Counter = () => {
	const [num, setNum] = useState(0)

	return (
		<>
			<span>{num}</span>
			<button className={classes.btn} onClick={() => setNum(prevState => prevState + 1)}>Count</button>
			<button className={classes.reset} onClick={() => setNum(0)}>Reset</button>
		</>
	)
}

export {Counter}