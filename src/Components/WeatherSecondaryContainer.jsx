import React from "react";

const WeatherSecondaryContainer = (props) => {
  const now = new Date();

  const day = now.toLocaleDateString("en-IN", { weekday: "long" });
  const date = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="border-2 bg-gray-900 w-100 ml-15 mt-10 pl-9 pt-10 rounded-2xl pb-10 text-white">
      <div className="font-bold text-3xl">
        {props.cityName}, <span>{props.countryName}</span>
      </div>
      <div className="font-bold">
        {props.climate}
        <span className="pl-2">
          | {day}, {date}, {time}
        </span>
      </div>
      <div className="flex pt-5">
        <div className="w-37 pl-2">
          <img src={props.imageURL} />
        </div>
        <div className="pt-4 pl-10">
          <div className="text-8xl">{props.degree}°</div>
          <div className="border-1"></div>
          <div className="">
            High: {props.high}° | Low: {props.low}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSecondaryContainer;
