"use client";
import { authenticate } from "../backend/action";
import styles from "./login.module.css";
import { useFormState } from "react-dom";

const LoginPage = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginPage;
