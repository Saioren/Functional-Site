"use client";

import { handleGithubLogin } from "@/lib/actions";
import classes from "./index.module.scss";

import { login } from "@/lib/actions";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginPage = () => {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form action={handleGithubLogin}>
          <button className={classes.github}>Login with Github</button>
        </form>
        <form className={classes.form} action={formAction}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {state?.error}
          <Link href="/register">
            {"Don't have an account?"} <b>Register</b>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
