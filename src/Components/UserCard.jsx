import React from "react";

const UserCard = ({
  name,
  username,
  email,
  street,
  suite,
  city,
  zipcode,
  lat,
  lng,
  phone,
  website,
  companyName,
  catchPhrase,
  bs,
}) => {
  return (
    <div>
      <div className="flex">
        <div className="border-2 rounded-lg m-5 w-1/4 p-5 bg-gradient-to-bl from-amber-600 to-blue-600">
          <div className="border-2 p-1 w-2/12 rounded-2xl mx-34 mb-4 bg-white "></div>
          <div className="font-bold text-2xl">{companyName}</div>
          <div className="font-mono font-light italic text-sm">
            {catchPhrase}
          </div>
          <img src="/assets/user-avatar-male-1.png" />
          <h1 className="text-2xl w-full text-center">{name}</h1>
          <div className="w-full text-center font-bold">@{username}</div>
          <div className="w-full text-center">{email}</div>
          <div className="w-full text-center">{phone}</div>
        </div>

        <div className="border-2 rounded-lg m-5 w-1/4 p-5 bg-gradient-to-bl from-amber-600 to-blue-600 text-center">
          <div className="border-2 p-1 w-2/12 rounded-2xl mx-34 mb-2 bg-white"></div>

          <div className="mt-[30%]">
            <div className="font-bold text-3xl">{website}</div>

            <div className="mb-20 mt-1 font-mono font-light italic">{bs}</div>

            <div>
              {street}, {suite},
            </div>
            <div>
              {city} - {zipcode}
            </div>

            <div>
              {lat} - {lng}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
