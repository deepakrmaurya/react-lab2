import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    console.log(json);

    setUserData(json);
  };
  console.log("userdata", userData);

  return (
    <div>
      User List
      <div className="border-2 m-2 p-10">
        {userData.map(
          ({
            id,
            name,
            username,
            email,
            address: {
              street,
              suite,
              city,
              zipcode,
              geo: { lat, lng },
            },
            phone,
            website,
            company: { name: companyName, catchPhrase, bs },
          }) => (
            <UserCard
              key={id}
              name={name}
              username={username}
              email={email}
              street={street}
              suite={suite}
              city={city}
              zipcode={zipcode}
              lat={lat}
              lng={lng}
              phone={phone}
              website={website}
              companyName={companyName}
              catchPhrase={catchPhrase}
              bs={bs}
            />
          )
        )}
      </div>
    </div>
  );
};

export default UserList;
