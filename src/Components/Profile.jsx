import Name from "./Name";

const Profile = (data) => {
  return (
    <div className="m-10 w-[40%] p-2 rounded-3xl bg-gray-100 hover:border-3 hover:bg-gray-200 border-2">
      <div className="flex">
        <div>
          <img className="w-40 rounded-2xl bg-orange-200" src={data.imageURL} />
        </div>
        <div className="p-4 pt-6 font-bold text-lg">
          <h1>Name: {data.name}</h1>
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
