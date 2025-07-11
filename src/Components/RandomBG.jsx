import { useState } from "react";

const RandomBG = () => {
  const [bgColor, setBgColor] = useState("#f87171");
  const [btnColor, setBtnColor] = useState("#2596be");
  //   const [btn2Color, setBtn2Color] = useState("#9900cc");

  const changeBGcolor = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    const hex = `#${randomNumber}`;
    setBgColor(hex);
    console.log(bgColor);
  };

  const changeBtncolor = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    const hex = `#${randomNumber}`;
    setBtnColor(hex);
    console.log(btnColor);
  };

  //   const changeBtn2color = () => {
  //     const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  //     const hex = `#${randomNumber}`;
  //     setBtn2Color(hex);
  //     console.log(btn2Color);
  //   };

  return (
    <div
      //   onClick={changeBtn2color}
      className="h-195"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="border-2 p-4 rounded-2xl ml-[25%] w-50 my-25"
        style={{ backgroundColor: btnColor }}
        onClick={changeBGcolor}
      >
        Click the button to randomly change background color...!
      </button>
      <button
        className="border-2 p-4 rounded-2xl ml-10 w-50 my-10 bg-[#9900cc]"
        onClick={changeBtncolor}
      >
        Click the button to randomly change Button color beside...!
      </button>
    </div>
  );
};

export default RandomBG;
