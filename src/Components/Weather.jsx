import React, { useEffect, useRef, useState } from "react";

const Weather = () => {
  const [searchCity, setSearchCity] = useState();

  const [latCord, setLatCord] = useState();
  const [lonCord, setLonCord] = useState();
  const [temp, setTemp] = useState();

  const searchTextRef = useRef();

  useEffect(() => {
    fetchData();
  }, [searchCity]);

  useEffect(() => {
    if (latCord && lonCord) {
      latAndLonData();
    }
  }, [latCord, lonCord]);

  const fetchData = async () => {
    if (!searchCity) return;

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${searchCity}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`
    );
    const json = await data.json();
    const latitude = json.list[0].coord.lat;
    const longitude = json.list[0].coord.lon;

    setLatCord(latitude);

    setLonCord(longitude);
  };

  const latAndLonData = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latCord}&lon=${lonCord}&units=metric&appid=5796abbde9106b7da4febfae8c44c232`
    );
    const json = await data.json();
    setTemp(json?.current?.temp);
  };

  const handleSearchText = () => {
    const inputValue = searchTextRef.current.value;
    setSearchCity(inputValue);
  };
  return (
    <div>
      <div>
        <input
          ref={searchTextRef}
          className="border-2 rounded-lg p-2 m-2"
          type="text"
        />
        <button
          onClick={handleSearchText}
          className="border-2 rounded-lg p-2 m-2"
        >
          Search
        </button>
      </div>

      {searchCity && (
        <div>
          <div>{searchCity}</div>
          <div>Temp: {temp}</div>
          <div>
            Cordinates: {latCord}, {lonCord}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
