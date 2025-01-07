"use client";

import { Checkbox, IconButton } from "@material-tailwind/react";
import React from "react";

export default function Todo({ id, value, completed }) {
  return (
    <div className="w-full flex items-center gap-1">
      <Checkbox checked={completed} />
      <p className={`flex-1 ${completed && "line-through"}`}>{value}</p>
      <IconButton>
        <i className="fas fa-pen" />
      </IconButton>
      <IconButton>
        <i className="fas fa-trash" />
      </IconButton>
    </div>
  );
}
