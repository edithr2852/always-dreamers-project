import React from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <main>
      <div class="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" text-anchor="middle">
            Sign Up or Login
          </text>
        </svg>
      </div>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}
