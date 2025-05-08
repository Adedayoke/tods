import React from "react";

export default function Task({
  text,
  completed,
  id,
  handleClick
}: {
  text: string;
  completed: boolean;
  id: number;
  handleClick: (id: number) => void;
}) {
  return (
    <div onClick={()=> handleClick(id)} className="py-1 flex gap-3">
      <input checked={completed} onChange={()=> handleClick(id)} type="checkbox" className="h-5 w-5 accent-primary-green" />
      <div className={`${completed ? "line-through opacity-70": ""}`}>{text}</div>
    </div>
  );
}
