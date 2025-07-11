import { useRef, useState } from "react";

const DropDown = () => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const [birthDate, setBirthDate] = useState({});

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i
  );

  const submitBirthDate = () => {
    const day = dayRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    console.log(day, month, year);
    setBirthDate({ day, month, year });
  };

  return (
    <div>
      Drop Down
      <div>
        <div className="px-11 ml-30">
          Select Birth Date
          <select
            ref={dayRef}
            className="border-2 py-1  rounded-md w-30 ml-2 mt-5"
          >
            <option>Day</option>
            {days.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </select>
          <select
            ref={monthRef}
            className="border-2 py-1  rounded-md w-30 ml-2 mt-5"
          >
            <option>Month</option>
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select
            ref={yearRef}
            className="border-2 py-1  rounded-md w-30 ml-2 mt-5"
          >
            <option>Year</option>
            {years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
          <button
            onClick={submitBirthDate}
            className="border-2 py-0.75 rounded-md w-20 ml-4 mt-5"
          >
            Submit
          </button>
        </div>
      </div>
      {birthDate.day && (
        <div className="flex pl-15 ml-65 rounded-lg py-10 mt-10 border-2 w-100">
          Your Birth Date:
          <div className="pl-2">{birthDate.day}</div>
          <div className="pl-2">{birthDate.month}</div>
          <div className="pl-2">{birthDate.year}</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
