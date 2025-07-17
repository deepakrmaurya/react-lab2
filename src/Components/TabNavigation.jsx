import { useState } from "react";

const TabNavigation = () => {
  const [tabState, newTabState] = useState();

  const handleTabNav = (e) => {
    const navValue = e.target.value;
    console.log(navValue);
    newTabState(navValue);
  };
  return (
    <div>
      TabNavigation
      <div className="ml-[38%]">
        <button
          onClick={handleTabNav}
          className="border-2 p-2 m-2 rounded-lg"
          value="home"
        >
          Home
        </button>
        <button
          onClick={handleTabNav}
          className="border-2 p-2 m-2 rounded-lg"
          value="about"
        >
          About
        </button>
        <button
          onClick={handleTabNav}
          className="border-2 p-2 m-2 rounded-lg"
          value="contact"
        >
          Contact
        </button>
      </div>
      <div
        className={`w-screen h-screen ${
          tabState === "contact"
            ? "bg-amber-500"
            : tabState === "about"
            ? "bg-blue-700"
            : "bg-emerald-600"
        }`}
      >
        {tabState === "contact"
          ? "Contact Page"
          : tabState === "about"
          ? "About Page"
          : "Home Page"}
      </div>
    </div>
  );
};

export default TabNavigation;
