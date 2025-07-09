import { useRef, useState } from "react";
import Task from "./Task";

const ToDo = () => {
  const taskInput = useRef();
  const [taskInputData, setTaskInputData] = useState([]);
  const [darkModeState, setDarkModeState] = useState(true);

  const addTaskBtn = () => {
    console.log("Clicked");
    const task = taskInput.current.value;
    console.log(task);
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTaskInputData([...taskInputData, newTask]);
    taskInput.current.value = "";
  };

  const completeBtn = (id) => {
    setTaskInputData(
      taskInputData.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );
  };

  const deleteBtn = (id) => {
    setTaskInputData(taskInputData.filter((t) => t.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkModeState(!darkModeState);
    console.log(darkModeState);
  };

  return (
    <div
      className={` pb-[60%]  ${
        darkModeState ? " bg-white text-black" : " bg-black text-white"
      }`}
    >
      <p
        className={`text-4xl p-1 font-bold  ${
          darkModeState ? " text-black" : " text-white"
        }`}
      >
        To Do
      </p>
      <div className="float-right">
        <button
          onClick={toggleDarkMode}
          className={`border-2 px-2 m-2 rounded-lg ${
            darkModeState
              ? "bg-white text-black border-black"
              : "bg-black text-white border-white"
          }`}
        >
          {darkModeState ? "Dark" : "Light"}
        </button>
      </div>
      <div className="flex mb-10">
        <input
          ref={taskInput}
          className="border-2 h-15 rounded-lg w-1/2 mt-10 ml-[20%] pl-4 bg-amber-500"
          type="text"
          placeholder="type here..."
        />
        <button
          onClick={addTaskBtn}
          className="border-2 h-15 rounded-lg mt-10 mx-5 px-5 bg-green-500"
        >
          Add Task
        </button>
      </div>
      {taskInputData.map((task) => (
        <Task
          key={task.id}
          task={task}
          onClickComplete={() => completeBtn(task.id)}
          onClickDelete={() => deleteBtn(task.id)}
        />
      ))}
    </div>
  );
};

export default ToDo;
