"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton(type: { type: "register" | "login" }) {
  const { pending } = useFormStatus();
  const label = type.type === "register" ? "Register" : "Login";
  return (
    <button className="border-2 px-4 py-2" type="submit" disabled={pending}>
      {pending ? "Loading..." : label}
    </button>
  );
}
