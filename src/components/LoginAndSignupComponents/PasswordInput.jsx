import React, { useRef, useState } from "react";
import { Eye, HideEye } from "../../assets/icons";

export default function PasswordInput({ type = true }) {
  let passRef = useRef();
  let [isHide, setIsHide] = useState("true");
  const hidePassword = () => {
    const passInput = passRef.current;
    if (isHide) {
      passInput.type = "text";
      setIsHide(false);
    } else {
      passInput.type = "password";
      setIsHide(true);
    }
  };
  return (
    <div className=" form-input-container">
      <label htmlFor="password" className="input-label">
        Password
      </label>
      <div className=" flex justify-between relative input-wraper">
        <input
          id="password"
          type="password"
          placeholder="Enter your Password"
          className="outline-none bg-white-2 w-full text-grey-3 font-normal leading-6"
          ref={passRef}
        />
        {isHide && (
          <img
            src={Eye}
            className="w-5 desktop:w-6 inline-block cursor-pointer"
            onClick={hidePassword}
          />
        )}
        {!isHide && (
          <img
            src={HideEye}
            className="w-5 desktop:w-6 inline-block cursor-pointer"
            onClick={hidePassword}
          />
        )}
      </div>
      {type && (
        <div className=" text-end leading-6 font-normal text-grey-5">
          Forgot password?
        </div>
      )}
    </div>
  );
}
