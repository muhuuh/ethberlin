import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import { userActions } from "../../store/user-slice";
import useModal from "../../../hooks/use-modal";
import PopupWallet from "../../Popups/PopUpWallet";

const SignInForm2 = () => {
  const history = useHistory();
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const checkemailValidity = (input) => {
    return input.trim().includes("@");
  };

  const emailInput = useInput(checkemailValidity);

  const emailInputClasses = emailInput.hasError
    ? "form-control invalid"
    : "form-control";

  //create random wallet
  let wallet = "0xDe56F4aFO87p5" + Math.random();
  wallet = wallet.replace(".", "");

  const newUser = {
    id: Math.random(),
    email: emailInput.enteredInput,
    wallet: wallet,
    logedIn: true,
    achievement: [],
  };

  let formIsValid = false;
  if (emailInput.enteredInputisValid) {
    formIsValid = true;
  }

  const onFocusHandler = () => {
    setIsFocus(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setIsFocus(false);

    if (!formIsValid) {
      return;
    }

    dispatch(userActions.addUser(newUser));
    console.log(newUser);

    emailInput.resetInput();

    history.push("/overview");
  };
  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        onFocus={onFocusHandler}
        className="mt-36 mx-24"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold mb-16 text-center">Sign up</p>
          <div className={`${emailInputClasses} `}>
            <label className="text-xl font-bold text-center">
              Please insert your email
            </label>
            <input
              type="text"
              onChange={emailInput.inputChangeHandler}
              onBlur={emailInput.inputBlurHandler}
              value={emailInput.enteredInput}
              className="border-2 rounded-full shadow-sm mt-8 h-12 w-96"
            />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            disabled={!formIsValid}
            className="bg-gray-500 text-white text-center text-lg border-2 rounded-full border-white hover:font-bold hover:scale-110 py-2 w-48"
          >
            Connect
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm2;
