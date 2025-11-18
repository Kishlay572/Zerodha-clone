import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(
      "https://zerodha-clone-1-gxx6.onrender.com/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();

    if (data.success) {
      window.location.href = "https://symphonious-mochi-accd3c.netlify.app"; // redirect
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="row">
      <h1 className="col-8 offset-3 mt-3">Signup</h1>
      <div className="col-8 offset-3 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              <b>Username</b>
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <b>Email</b>
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <b>Password</b>
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
