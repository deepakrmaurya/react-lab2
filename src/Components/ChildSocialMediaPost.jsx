import React, { useState } from "react";

const ChildSocialMediaPost = (props) => {
  const [likeToggle, setLikeToggle] = useState(true);

  const handleLikeToggle = () => {
    setLikeToggle(!likeToggle);
  };
  return (
    <div>
      <div className=" w-100 h-150 rounded-lg ml-30 mt-10 bg-gray-900 text-white">
        <div className="font-bold p-2 pl-2">{props.username}</div>
        <div className="border-2 border-gray-900 w-full  rounded-sm">
          <img src={props.imageURL} />
        </div>
        {likeToggle ? (
          <div className="pl-2 pt-2 flex">
            <img
              className="w-5 ml-1 mr-1"
              onClick={handleLikeToggle}
              src="/assets/whiteemptyheart.png"
            />
            {props.likes} likes
          </div>
        ) : (
          <div className="pl-2 pt-2 flex">
            <img
              className="w-5 ml-1 mr-1"
              onClick={handleLikeToggle}
              src="/assets/redheart.png"
            />
            {props.likes + 1} likes
          </div>
        )}

        <div className="flex">
          <p className="pl-2 font-bold">
            {props.username}
            <span className="font-normal">{props.caption}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildSocialMediaPost;
