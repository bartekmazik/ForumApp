import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage(props) {
  const { setIsLogged, isLogged } = props;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLogged(true);
    navigate("/");
    console.log(isLogged);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <Link to="/" className="text-light text-decoration-none">
                Submit
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
