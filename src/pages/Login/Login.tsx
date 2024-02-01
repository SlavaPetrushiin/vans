import React from "react"
import "./Login.scss";
import { useLoaderData, useNavigate } from "react-router-dom";

export  type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};


export function loader({ request }: any) {
  return new URL(request.url).searchParams.get("message")
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
  const message = useLoaderData();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(loginFormData)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message as string && <h3 style={{color: "red"}}>{message as string}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}