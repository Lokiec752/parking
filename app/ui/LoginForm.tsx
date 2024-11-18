"use client";
import { SubmitButton } from "./SubmitButton";

export function LoginForm() {
  return (
    <form className="flex flex-col space-y-4 bg-orange-200 p-3 rounded-md w-full items-center">
      <div className="w-full flex items-center justify-center gap-6">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Email" />
      </div>
      <div className="w-full flex items-center justify-center gap-6">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <SubmitButton type="login" />
    </form>
  );
}
