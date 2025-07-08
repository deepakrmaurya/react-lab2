import Name from "./Name";

const HelloWorld = () => {
  return (
    <div>
      <h1 className="text-red-500 flex font-bold underline ">
        <Name name="Deepak" />
      </h1>
    </div>
  );
};

export default HelloWorld;
