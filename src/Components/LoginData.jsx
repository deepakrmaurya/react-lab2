import { useRef, useState } from "react";

const LoginData = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const [formData, setFormData] = useState({});

  const displaySubmittedData = () => {
    const nameData = nameRef.current.value;
    const emailData = emailRef.current.value;
    const ageData = ageRef.current.value;

    console.log(nameData, emailData, ageData);

    setFormData({ nameData, emailData, ageData });
  };

  return (
    <div>
      Login Data
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-70 mx-20 py-5 pl-7 bg-green-600 rounded-md border-2"
        >
          <input
            ref={nameRef}
            className="border-2 rounded-md pl-2 m-1 bg-amber-500 py-1"
            type="text"
            placeholder="Enter Name"
          />
          <input
            ref={emailRef}
            className="border-2 rounded-md pl-2 m-1 bg-amber-500 py-1"
            type="text"
            placeholder="Enter Email"
          />
          <input
            ref={ageRef}
            className="border-2 rounded-md pl-2 m-1 bg-amber-500 py-1"
            type="number"
            placeholder="Enter Age"
          />
          <input
            className="border-2 rounded-md pl-2 m-1 bg-amber-500 py-1"
            type="password"
            placeholder="Enter Password"
          />
          <button
            onClick={displaySubmittedData}
            className="mx-[30%] border-2 rounded-md px-2 m-1 bg-yellow-200 py-1"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <div className="w-70 mx-20 my-10 border-2 p-2 rounded-lg bg-gray-300">
          Data Entered:
          {formData.nameData && (
            <div>
              <p>Name: {formData.nameData}</p>
              <p>Email: {formData.emailData}</p>
              <p>Age: {formData.ageData}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginData;
