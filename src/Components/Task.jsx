const Task = (props) => {
  return (
    <div className="border-2 h-15 flex justify-between rounded-lg w-1/2 mt-2 ml-[20%]  font-bold pl-4 bg-blue-400 ">
      <div
        className={`pt-4 ${
          props.task.completed ? "line-through text-green-700" : ""
        }`}
      >
        {props.task.text}
      </div>
      <div className="pt-2">
        <button
          onClick={props.onClickComplete}
          className="border-2 h-10 rounded-lg px-2 bg-green-500"
        >
          Completed
        </button>
        <button
          onClick={props.onClickDelete}
          className="mx-2 border-2 h-10 rounded-lg px-2 bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
