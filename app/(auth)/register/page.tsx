"use client";

import { register } from "@/lib/actions";
import classes from "./index.module.scss";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <div className={classes.wrap}>
      <form className={classes.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input
          type="password"
          placeholder="password again"
          name="passwordRepeat"
        />
        <button>Register</button>
        {state?.error}
        <Link href="/login">
          Have an account? <b>Login</b>
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
