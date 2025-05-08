"use client";
import { IoMdAdd } from "react-icons/io";
import Task from "./Task";
import { useState } from "react";

type TaskType = {
  id: number;
  text: string;
  completed: boolean;
};

export default function DailyTask() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      completed: false,
      id: 1,
      text: "Learn programming by 12PM",
    },
    {
      completed: false,
      id: 2,
      text: "Learn how to cook by 1PM",
    },
    {
      completed: false,
      id: 3,
      text: "Learn how to play at 2PM",
    },
    {
      completed: false,
      id: 4,
      text: "Have lunch at 4PM",
    },
    {
      completed: false,
      id: 5,
      text: "Going to travel 6PM",
    },
  ]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  function handleClickTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      text: inputValue,
      completed: false,
    };
    setTasks((c) => [...c, newTask]);
    setInputValue("");
    setShowInput(false);
  }
  return (
    <div className="w-full h-[30vh] bg-white rounded-xl shadow-lg p-3 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm">Daily Task</h3>
        <IoMdAdd
          className={`text-primary-green cursor-pointer transition-all ${
            showInput ? "rotate-45" : ""
          }`}
          onClick={() => setShowInput((c) => !c)}
          size={30}
        />
      </div>
      {showInput && (
        <div className="flex justify-between gap-2 items-center">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new task"
            className="w-full outline-0 rounded-lg border px-3 py-2"
          />
          <button
            onClick={handleAddTask}
            className="bg-primary-green text-white px-3 py-2 rounded-lg w-[30%]"
          >
            Add
          </button>
        </div>
      )}
      <div className="h-full overflow-y-auto">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              id={task.id}
              handleClick={handleClickTask}
              key={task.id}
              text={task.text}
              completed={task.completed}
            />
          ))
        ) : (
          <p className="text-center">Tasks appear here</p>
        )}
      </div>
    </div>
  );
}
