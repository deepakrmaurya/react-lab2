const RandomBG = () => {
  const changeBGcolor = () => {
    console.log("clicked");
  };
  return (
    <div className="bg-green-200 h-195">
      <button
        className="border-2 p-4 rounded-2xl mx-[25%] my-25 bg-amber-400"
        onClick={changeBGcolor}
      >
        Click the button to randomly change background color...!
      </button>
    </div>
  );
};

export default RandomBG;
