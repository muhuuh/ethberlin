import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Prompt } from "react-router-dom";
import UseHttp from "../../../hooks/use-http";
import useInput from "../../../hooks/use-input";
import { userActions } from "../../store/user-slice";

const SignInForm = () => {
  const history = useHistory();
  const { httpState, sendRequest } = UseHttp();
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const checkValidity = (input) => {
    return input.trim() !== "";
  };
  const checkemailValidity = (input) => {
    return input.trim().includes("@");
  };
  const checkpasswordValidity = (input) => {
    return input.trim().length > 4;
  };
  const usernameInput = useInput(checkValidity);
  const emailInput = useInput(checkemailValidity);
  const passwordInput = useInput(checkpasswordValidity);

  const usernameInputClasses = usernameInput.hasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInput.hasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInput.hasError
    ? "form-control invalid"
    : "form-control";

  const newUser = {
    id: Math.random(),
    username: usernameInput.enteredInput,
    email: emailInput.enteredInput,
    password: passwordInput.enteredInput,
  };

  let formIsValid = false;
  if (
    usernameInput.enteredInputisValid &&
    emailInput.enteredInputisValid &&
    passwordInput.enteredInputisValid
  ) {
    formIsValid = true;
  }

  const onFocusHandler = () => {
    setIsFocus(true);
  };

  const onExitHandler = () => {
    setIsFocus(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setIsFocus(false);

    if (!formIsValid) {
      return;
    }

    dispatch(userActions.addUser(newUser));

    usernameInput.resetInput();
    emailInput.resetInput();
    passwordInput.resetInput();

    history.push("/overview");
  };
  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        onFocus={onFocusHandler}
        className="mt-20 mx-24"
      >
        <div className="flex flex-row justify-around gap-x-12">
          <div>
            <div
              className={`${usernameInputClasses} flex flex-row justify-between mb-10`}
            >
              <label className="mr-6">UserName</label>
              <input
                type="text"
                onChange={usernameInput.inputChangeHandler}
                onBlur={usernameInput.inputBlurHandler}
                value={usernameInput.enteredInput}
                className="border-2 rounded-lg shadow-sm h-8 w-48"
              />
            </div>
            <div
              className={`${emailInputClasses} flex flex-row justify-between mb-10`}
            >
              <label className="mr-6">Email</label>
              <input
                type="text"
                onChange={emailInput.inputChangeHandler}
                onBlur={emailInput.inputBlurHandler}
                value={emailInput.enteredInput}
                className="border-2 rounded-lg shadow-sm h-8 w-48"
              />
            </div>
          </div>
          <div>
            <div
              className={`${passwordInputClasses} flex flex-row justify-between mb-10`}
            >
              <label className="mr-6">Password</label>
              <input
                type="password"
                onChange={passwordInput.inputChangeHandler}
                onBlur={passwordInput.inputBlurHandler}
                value={passwordInput.enteredInput}
                className="border-2 rounded-lg shadow-sm h-8 w-48"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
            
          <Link
            to="/overview"
            type="submit"
            disabled={!formIsValid}
            className="bg-teal-500 text-white border-2 rounded-lg border-white hover:font-bold hover:scale-110 py-1 px-4 "
            onClick={onExitHandler}
          >
            Connect
          </Link>

        </div>
      </form>
    </div>
  );
};

export default SignInForm;
