import { useRef, useState } from "react";

const MultipleInputForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const [userData, setUserData] = useState({});

  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    setUserData({ firstName, lastName, email });
  };

  return (
    <div>
      Multiple Input Form
      <div className="border-2 w-1/2 mx-[25%] p-10 rounded-md">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="px-[25%]">
            <div>
              <input
                ref={firstNameRef}
                className="border-2 p-1 m-1 rounded-md"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                ref={lastNameRef}
                className="border-2 p-1 m-1 rounded-md"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                ref={emailRef}
                className="border-2 p-1 m-1 rounded-md"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="border-2 p-1 m-1 rounded-md mx-[38%]"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {userData.firstName && (
        <div className="border-2 w-1/2 mx-[25%] mt-5 p-10 rounded-md">
          <div className="flex">
            User Name: <p className="pl-2 pr-2">{userData.firstName}</p>
            <p>{userData.lastName}</p>
          </div>
          <div className="flex">
            User Email:<p className="pl-2.5"> {userData.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MultipleInputForm;
