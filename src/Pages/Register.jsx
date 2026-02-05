import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Context";

const Register = () => {
  const { creatUserEmail, setuser, updateUser } = useContext(AuthContext);
  const [nameError, setnameError] = useState("");
  const navigate = useNavigate()

  // ---------------handle register-----------------
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // console.log({ name, email, password, photo });
    if (name.length < 5) {
      setnameError("name should be more then 5 character");
      return;
    } else {
      setnameError("");
    }

    // -------------create user email with password----------------
    creatUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // ------------update user set display -------------------
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setuser({ ...user, displayName: name, photoURL: photo });
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
            setuser(user);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mt-[100px] mb-5 mx-auto max-w-sm shadow-2xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold">Register your account</h3>

        <form onSubmit={handleRegister}>
          {/* name */}
          <label className="label">Name</label>
          <input className="input bg-base-200" name="name" required />
          {nameError && <p className="text-error text-xm">{nameError}</p>}
          {/* photo */}
          <label className="label">Photo URL</label>
          <input className="input bg-base-200" name="photo" />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input bg-base-200"
            name="email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input bg-base-200"
            name="password"
            required
          />
          {/* button */}
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          {/* link */}
          <p className="mt-5 font-bold">
            Already Have An Account?{" "}
            <Link to="/auth/login" className="text-secondary underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
