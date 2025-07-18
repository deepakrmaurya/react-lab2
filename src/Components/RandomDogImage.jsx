import React, { useEffect, useState } from "react";

const RandomDogImage = () => {
  const [dogImage, setDogImage] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await data.json();
    console.log(json.message);
    setDogImage(json.message);
  };

  return (
    <div>
      RandomDogImage
      <div>
        <img src={dogImage} />
      </div>
    </div>
  );
};

export default RandomDogImage;
