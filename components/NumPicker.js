import React from "react";
import moment from "moment";
import styles from "../styles/Home.module.scss";
import Switcher from "./Switcher";

export default function NumPicker() {
	const [value, setValue] = React.useState(1);

	const submitHandler = (e) => {
		e.preventDefault();
		setNum(value);
	}

	return (
		<div className={styles.formContainer}>
			<form className={styles.formEl}>
				<input className={styles.input} name="input" type="number" value={value} onChange={e => { setValue(e.currentTarget.value)}}/>
			</form>
			<div>
				<Switcher num={value}/>
			</div>
			<div></div>
		</div>
	);
}