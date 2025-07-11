import React, { useRef, useState } from "react";

const NewsLetterSignUp = () => {
  const emailRef = useRef();
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailRef.current.value);

    const errorMessage = "Please enter valid email";

    if (isValid) {
      setUserEmail(emailRef.current.value);
    } else {
      setErrorMessage(errorMessage);
    }
  };

  const handleBackBtn = () => {
    setUserEmail(!userEmail);
    setErrorMessage(!errorMessage);
  };

  return (
    <div>
      NewsLetterSignUp
      {!userEmail ? (
        <div className="border-2 mt-10 m-2 h-50 rounded-lg">
          <div>
            <div className=" w-1/2 mx-auto pt-10 pl-2 font-bold text-2xl">
              To Subscribe NewsLetter Enter Email
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" w-1/2 mx-auto  my-auto flex"
            >
              <input
                ref={emailRef}
                className="border-2 w-100 p-2 m-2 rounded-md"
                type="text"
                placeholder="Enter email"
              />
              <button
                onClick={submitForm}
                className="border-2 rounded-md p-2 m-2"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="text-red-600 font-bold w-1/2 ml-66 -m-1">
              {!userEmail && errorMessage}
            </div>
          </div>
        </div>
      ) : (
        <div className="border-2 mt-10 m-2 h-50 rounded-lg">
          <button
            onClick={handleBackBtn}
            className="border-2 rounded-md px-4 py-1 mx-5 my-4"
          >
            Back
          </button>
          <div className="font-bold text-2xl px-66 flex">
            <p className="pr-2"> You are subscribed:</p> {userEmail}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsLetterSignUp;
