import styles from "./Button.module.css";

function Button({ title, children, onClick, disabled = false }) {
  return (
    <button
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
