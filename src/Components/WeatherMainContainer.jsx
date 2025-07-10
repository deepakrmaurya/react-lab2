import React from "react";
import WeatherSecondaryContainer from "./WeatherSecondaryContainer";

const WeatherMainContainer = () => {
  return (
    <div>
      WeatherMainContainer
      <WeatherSecondaryContainer
        cityName={"Mumbai"}
        countryName={"India"}
        climate={"Rainy"}
        dateAndTime={"something....."}
        imageURL={"/assets/RainEmoji.png"}
        degree={29}
        high={29}
        low={27}
      />
    </div>
  );
};

export default WeatherMainContainer;
