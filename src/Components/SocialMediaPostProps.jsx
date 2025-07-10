import React from "react";
import ChildSocialMediaPost from "./ChildSocialMediaPost";

const SocialMediaPostProps = () => {
  return (
    <div>
      SocialMediaPostProps
      <ChildSocialMediaPost
        username={"mauryadeepak_"}
        likes={121}
        caption={"The purpose of life is to be happy....☺️🖤"}
        imageURL={"/assets/heathervolley.jpeg"}
      />
    </div>
  );
};

export default SocialMediaPostProps;
