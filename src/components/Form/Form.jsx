import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        className={styles.textArea}
        type='text'
        placeholder='Enter new task'
      ></textarea>
      <Button isEmpty={!inputValue.trim()}>Add new task</Button>
      <div className={styles.test}></div>
    </form>
  );
}
