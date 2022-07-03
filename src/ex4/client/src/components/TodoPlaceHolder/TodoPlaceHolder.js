import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./TodoPlaceHolder.css";

const TodoPlaceHolder = () => {
  return (
    <div className="placeHolder">
      <BsPlusLg className="placeHolder-plusIcon" size="100" color="#a1faa3" />
      <p className="placeHolder-text">Time to add your first task</p>
    </div>
  );
};

export default TodoPlaceHolder;
